import { useState } from "react";
import { useNavigate } from "react-router";

import PINInput from "../../components/PINInput";
import SuccessAlert from "../../components/alerts/Success";
import ErrorAlert from "../../components/alerts/Error";

import axios from "axios";
import { API_URL } from "../../../globals.json";
import { getTokens } from "../../config/axiosConfig";

const CreatePINPage = () => {
  const { access } = getTokens();

  const [isMutating, setIsMutating] = useState(false);
  const [successErrMsg, setSuccessErrMsg] = useState("");
  const [validationErrMsg, setValidationErrMsg] = useState("");
  const [pin, setPin] = useState(new Array(5).fill(""));

  const navigate = useNavigate();

  const handleCreatePIN = async (e) => {
    e.preventDefault();

    setIsMutating(true);
    const data = {
      pin: pin.join(""),
    };

    try {
      const res = await axios.post(
        `${API_URL}/v1/support/set-agent-pin`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data.message);

      window.xuiAnimeStart("successAlert");
      setSuccessErrMsg(res.data.message);

      setTimeout(() => {
        window.xuiAnimeEnd("successAlert");
        setIsMutating(false);
        navigate("/dashboard");
      }, 2800);
    } catch (err) {
      console.error(err);
      setIsMutating(false);
      setValidationErrMsg(
        err.response?.data?.message || err.response?.data?.error || err.message
      );

      window.xuiAnimeStart("errorAlert");

      setTimeout(() => {
        window.xuiAnimeEnd("errorAlert");
      }, 2800);
    }
  };

  const isPINFilled = pin.every((digit) => digit !== "");

  return (
    <>
      <div>
        <h1 className="xui-font-sz-200">Hello,</h1>
        <p className="xui-mt-half xui-font-sz-120 xui-font-w-600">
          Please create your PIN.
        </p>
      </div>
      <form
        className="xui-form xui-mt-2"
        onSubmit={handleCreatePIN}
        autoComplete="off"
        noValidate
      >
        <label className="xui-mb-1">Create a 5-digit PIN:</label>
        <PINInput pin={pin} onChange={setPin} gap="half" />

        <button
          disabled={!isPINFilled || isMutating}
          className="xui-btn xui-bdr-rad-half xui-mt-1 primary-bg-100 xui-text-white xui-w-fluid-100"
        >
          {isMutating ? "Creating ..." : "Create PIN"}
        </button>
      </form>

      <ErrorAlert name={`errorAlert`} message={validationErrMsg} />
      <SuccessAlert
        name={`successAlert`}
        message={successErrMsg}
        noIcon={true}
      />
    </>
  );
};

export default CreatePINPage;
