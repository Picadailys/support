import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import ErrorAlert from "../../components/alerts/Error";
import SuccessAlert from "../../components/alerts/Success";
import { View, ViewOff } from "@carbon/icons-react";

import { API_URL } from "../../../globals.json";
import { generateDeviceId } from "../../utils/helpers";

const ManagerSignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");
  const password2 = watch("password2");
  const [InputPassword, setInputPassword] = useState(true);
  const [confirmInputPassword, setConfirmInputPassword] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [validationErrMsg, setValidationErrMsg] = useState("");
  const [successErrMsg, setSuccessErrMsg] = useState("");
  const navigate = useNavigate();

  const signUp = async (fields) => {
    setIsDisabled(true);
    const device_id = await generateDeviceId();
    const newData = { ...fields, device_id };
    axios({
      method: "POST",
      url: `${API_URL}/v1/support/register-manager`,
      data: newData,
    }).then(
      (res) => {
        window.xuiAnimeStart("successAlert");
        setSuccessErrMsg(res.data.message);
        setTimeout(() => {
          window.xuiAnimeEnd("successAlert");
          setIsDisabled(false);
          navigate("/verify-otp");
        }, 2800);
      },
      (err) => {
        setIsDisabled(false);
        setValidationErrMsg(
          err.response.data.email[0] ||
            err.response.data.phone_number[0] ||
            err.message
        );
        window.xuiAnimeStart("errorAlert");
        setTimeout(() => {
          window.xuiAnimeEnd("errorAlert");
        }, 2800);
      }
    );
  };
  return (
    <>
      <div>
        <h1 className="xui-font-sz-200">Hello,</h1>
        <p className="xui-mt-half xui-font-sz-120 xui-font-w-600">
          Kindly input your details to Sign up.
        </p>
      </div>
      <form
        className="xui-form xui-mt-2"
        onSubmit={handleSubmit(signUp)}
        autoComplete="off"
        noValidate
      >
        <div className="xui-form-box">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            {...register("phone_number", {
              required: "This field is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Phone number must be 10–15 digits",
              },
            })}
            type="tel"
            name="phone_number"
            id="phone_number"
            placeholder="1234567890"
          />
          {errors.phone && (
            <span className="xui-form-error-msg">{errors.phone.message}</span>
          )}
        </div>
        <div className="xui-form-box">
          <label htmlFor="email">Email Address</label>
          <input
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            name="email"
            id="email"
            placeholder="xyz@picadailys.com"
          />
          {errors.email && (
            <span className="xui-form-error-msg">{errors.email.message}</span>
          )}
        </div>
        <div className="xui-form-box">
          <label htmlFor="password">Create Password</label>
          <div className="xui-pos-relative">
            <input
              type={InputPassword ? "password" : "text"}
              name="password"
              id="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters and above",
                },
              })}
              placeholder="***************"
            />
            <div
              onClick={() => setInputPassword(!InputPassword)}
              className="eye-password xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center"
            >
              {InputPassword ? <View size={20} /> : <ViewOff size={20} />}
            </div>
          </div>
          {errors.password && (
            <span className="xui-form-error-msg">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="xui-form-box">
          <label htmlFor="password2">Confirm Password</label>
          <div className="xui-pos-relative">
            <input
              type={confirmInputPassword ? "password" : "text"}
              name="password2"
              id="password2"
              {...register("password2", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters and above",
                },
              })}
              placeholder="***************"
            />
            <div
              onClick={() => setConfirmInputPassword(!confirmInputPassword)}
              className="eye-password xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center"
            >
              {confirmInputPassword ? (
                <View size={20} />
              ) : (
                <ViewOff size={20} />
              )}
            </div>
          </div>
          {errors.password2 && (
            <span className="xui-form-error-msg">
              {errors.password2.message}
            </span>
          )}
          {!errors.password2 && password !== password2 && (
            <span className="xui-form-error-msg">{`Password doesn't match`}</span>
          )}
        </div>
        <div className="xui-form-box">
          <button
            className="xui-btn xui-btn-block primary-bg-100 xui-bdr-rad-half xui-text-white "
            disabled={
              isDisabled || !password?.length === 8 || !password2?.length === 8
            }
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

export default ManagerSignUpPage;
