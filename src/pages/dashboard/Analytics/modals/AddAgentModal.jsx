import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import ErrorAlert from "../../../../components/alerts/Error";
import SuccessAlert from "../../../../components/alerts/Success";
import Modal from "../../../../components/modals/Modal";
import PinInput from "react-pin-input";

import { API_URL } from "../../../../../globals.json";
import { getTokens } from "../../../../config/axiosConfig";
import PINInput from "../../../../components/PINInput";

const AddAgentModal = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    setValue,
  } = useForm({ mode: "onChange" });

  const fullName = watch("full_name");
  const email = watch("email");
  const role = watch("role") || [];

  const [view, setView] = useState("AddAgentView");
  const [isMutating, setIsMutating] = useState(false);
  const [validationErrMsg, setValidationErrMsg] = useState("");
  const [successErrMsg, setSuccessErrMsg] = useState("");
  const [pin, setPin] = useState(new Array(5).fill(""));

  const handleRoleChange = (event) => {
    const selectedValue = event.target.value;
    setValue("role", [selectedValue], { shouldValidate: true });
  };

  const handleAddAgent = async (fields) => {
    setIsMutating(true);
    const newData = { ...fields, pin: "12345" };
    const { access } = getTokens();

    try {
      const res = await axios.post(`${API_URL}/v1/support/add-agent`, newData, {
        headers: {
          Authorization: `Bearer ${access}`,
          "Content-Type": "application/json",
        },
      });

      window.xuiAnimeStart("successAlert");
      setSuccessErrMsg(res.data.message);

      setTimeout(() => {
        window.xuiAnimeEnd("successAlert");
        setIsMutating(false);
        // navigate("/verify-otp");
        closeModal();
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

  useEffect(() => {
    register("role", { required: "This field is required" });
  }, [register]);

  const isPINFilled = pin.every((digit) => digit !== "");

  return (
    <>
      <Modal handleClose={closeModal}>
        <h3 className="xui-mb-1">Add Agent</h3>

        {view === "AddAgentView" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setView("PINInputView");
            }}
            className="xui-mt-1 xui-form"
          >
            <div className="xui-d-flex xui-flex-dir-column xui-grid-gap-half xui-mb-1">
              <label htmlFor="name">Name of Agent</label>
              <input
                {...register("full_name", {
                  required: "This field is required",
                  minLength: {
                    value: 3,
                    message: "Agent name must be more than three letters",
                  },
                })}
                id="name"
                type="text"
                placeholder="Enter agent name"
                className="xui-bdr-w-2 xui-bdr-rad-half"
              />
              {errors.full_name && (
                <span className="xui-form-error-msg">
                  {errors.full_name.message}
                </span>
              )}
            </div>

            <div className="xui-d-flex xui-flex-dir-column xui-grid-gap-half xui-mb-1">
              <label htmlFor="email">Email Address</label>
              <input
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                id="email"
                type="email"
                placeholder="Enter email address"
                className="xui-bdr-w-2 xui-bdr-rad-half"
              />
              {errors.email && (
                <span className="xui-form-error-msg">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="xui-d-flex xui-flex-dir-column xui-grid-gap-half xui-mb-1">
              <label htmlFor="role">Assign Role</label>
              <select
                id="role"
                className="xui-bdr-w-2 xui-bdr-rad-half"
                defaultValue=""
                onChange={handleRoleChange}
              >
                <option value="" disabled>
                  -- select
                </option>
                <option value="Agent">Agent</option>
                <option value="Moderator">Moderator</option>
              </select>
              {errors.role && (
                <span className="xui-form-error-msg">
                  {errors.role.message}
                </span>
              )}
            </div>

            <button
              disabled={!isValid}
              className="xui-btn xui-bdr-rad-half primary-bg-100 xui-text-white xui-w-fluid-100"
            >
              Proceed
            </button>
          </form>
        )}

        {view === "PINInputView" && (
          <form
            className="xui-d-flex xui-flex-dir-column xui-grid-gap-half"
            onSubmit={handleSubmit(handleAddAgent)}
          >
            <label className="xui-mb-1">Enter PIN to add agent:</label>
            <PINInput pin={pin} onChange={setPin} gap="half" />

            <button
              disabled={!isPINFilled || isMutating}
              className="xui-btn xui-bdr-rad-half xui-mt-1 primary-bg-100 xui-text-white xui-w-fluid-100"
            >
              {isMutating ? "Adding agent ..." : "Add Agent"}
            </button>
          </form>
        )}
      </Modal>

      <ErrorAlert name={`errorAlert`} message={validationErrMsg} />
      <SuccessAlert
        name={`successAlert`}
        message={successErrMsg}
        noIcon={true}
      />
    </>
  );
};

export default AddAgentModal;
