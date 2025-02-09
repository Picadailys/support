import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorAlert from "../../components/alerts/Error";
import SuccessAlert from "../../components/alerts/Success";
import { View, ViewOff } from "@carbon/icons-react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../../../globals.json";
import axios from "axios";
import PinInput from "react-pin-input";

const VerifyOTPPage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setError,
  } = useForm();
  const [isDisabled, setIsDisabled] = useState(false);
  const [validationErrMsg, setValidationErrMsg] = useState("");
  const [successErrMsg, setSuccessErrMsg] = useState("");
  const pinValue = watch("otp");

  const otpSignup = (fields) => {
    setIsDisabled(true);
    if (
      !fields.otp ||
      fields.otp.length !== 4 ||
      !/^[0-9]*$/.test(fields.otp)
    ) {
      setError("otp", {
        type: "manual",
        message: "Invalid verification code",
      });
      setIsDisabled(false);
      return;
    } else {
      console.log(fields);
      axios({
        method: "POST",
        url: `${API_URL}/v1/support/verifyotp`,
        data: {
          otp: fields.otp,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          window.xuiAnimeStart("successAlert");
          setSuccessErrMsg(res.data.message);
          setTimeout(() => {
            window.xuiAnimeEnd("successAlert");
            setIsDisabled(false);
          }, 2800);
        })
        .catch((err) => {
          console.log(err);
          setIsDisabled(false);
          setValidationErrMsg(
            err.response.status === 422
              ? err?.response?.data?.status
              : err?.response?.data?.message
          );
          window.xuiAnimeStart("errorAlert");
          setTimeout(() => {
            window.xuiAnimeEnd("errorAlert");
          }, 2800);
        });
    }
  };

  return (
    <>
      <div>
        <h1 className="xui-font-sz-200">Almost There,</h1>
        <p className="xui-mt-half xui-font-sz-120 xui-font-w-600">
          Create your 4 digit authentication pin
        </p>
      </div>
      <form
        className="xui-form xui-mt-2"
        onSubmit={handleSubmit(otpSignup)}
        autoComplete="off"
        noValidate
      >
        <div className="xui-form-box">
          <label htmlFor="otp">Enter Pin:</label>
          <input type="hidden" {...register("otp")} value={pinValue} />
          <PinInput
            length={4}
            initialValue=""
            secret={false}
            onChange={(value) => setValue("otp", value)}
            type="numeric"
            inputMode="number"
            style={{ padding: "10px" }}
            inputStyle={{ borderColor: "#737373" }}
            inputFocusStyle={{ borderColor: "#737373" }}
            onComplete={(value) => setValue("otp", value)}
            autoSelect={true}
            regexCriteria={/^[0-9]*$/}
          />
          {errors.otp && (
            <p className="xui-form-error-msg">{errors.otp.message}</p>
          )}
        </div>
        <div className="xui-form-box">
          <button
            className="xui-btn xui-btn-block primary-bg-100 xui-bdr-rad-half xui-text-white "
            disabled={isDisabled || !pinValue || pinValue.length !== 4}
          >
            {isDisabled ? "Authentication in progress..." : "Proceed"}
          </button>
        </div>
        <p className="xui-text-center xui-mt-1-half">
          I already have an account.&nbsp;
          <Link
            to="/login"
            className="primary-color-100 xui-font-w-600 xui-text-dc-none"
          >
            LOGIN
          </Link>
        </p>
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

export default VerifyOTPPage;
