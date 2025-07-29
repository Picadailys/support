import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorAlert from "../../components/alerts/Error";
import SuccessAlert from "../../components/alerts/Success";
import { View, ViewOff } from "@carbon/icons-react";

import { API_URL } from "../../../globals.json";
import { setSupportRole, setTokens } from "../../config/axiosConfig";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [inputPassword, setInputPassword] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [validationErrMsg, setValidationErrMsg] = useState("");
  const [successErrMsg, setSuccessErrMsg] = useState("");

  const emailValue = watch("email");
  const passwordValue = watch("password");

  const signIn = async (fields) => {
    setIsDisabled(true);
    try {
      const { data } = await axios.post(`${API_URL}/v1/support/login`, fields);
      const { access, refresh } = data.tokens;
      const { roles, is_admin_pin_set } = data.user_data;
      console.log(roles);
      setTokens({ access, refresh });
      setSupportRole(roles[0]);

      if (is_admin_pin_set) {
        setSuccessErrMsg(data.message);
        window.xuiAnimeStart("successAlert");
        setTimeout(() => {
          setSuccessErrMsg("Logging in ...");
          setTimeout(() => navigate("/dashboard"), 3600);
        }, 2800);
      } else {
        setSuccessErrMsg("Proceed to create PIN");
        setTimeout(() => navigate("/create-pin"), 1500);
      }
    } catch (err) {
      setIsDisabled(false);
      setValidationErrMsg(
        err.response?.status === 422
          ? err.response?.data?.data?.[0]?.msg
          : err.response?.data?.message
      );
      window.xuiAnimeStart("errorAlert");
      setTimeout(() => window.xuiAnimeEnd("errorAlert"), 2800);
    }
  };

  return (
    <>
      <div>
        <h1 className="xui-font-sz-200">Hello,</h1>
        <p className="xui-mt-half xui-font-sz-120 xui-font-w-600">
          Kindly input your details to Login.
        </p>
      </div>
      <form
        className="xui-form xui-mt-2"
        onSubmit={handleSubmit(signIn)}
        autoComplete="off"
        noValidate
      >
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
            id="email"
            placeholder="xyz@picadailys.com"
          />
          {errors.email && (
            <span className="xui-form-error-msg">{errors.email.message}</span>
          )}
        </div>
        <div className="xui-form-box">
          <label htmlFor="password">Password</label>
          <div className="xui-pos-relative">
            <input
              type={inputPassword ? "password" : "text"}
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
              onClick={() => setInputPassword(!inputPassword)}
              className="eye-password xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center"
            >
              {inputPassword ? <View size={20} /> : <ViewOff size={20} />}
            </div>
          </div>
          {errors.password && (
            <span className="xui-form-error-msg">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="xui-form-box">
          <button
            className="xui-btn xui-btn-block primary-bg-100 xui-bdr-rad-half xui-text-white"
            disabled={isDisabled || !emailValue || !passwordValue}
          >
            {isDisabled ? "Signing in..." : "Proceed"}
          </button>
        </div>
        <p className="xui-text-center xui-mt-1-half">
          I don’t have an account.&nbsp;
          <Link
            to="/agent/signup"
            className="primary-color-100 xui-font-w-600 xui-text-dc-none"
          >
            SIGNUP
          </Link>
        </p>
      </form>
      <ErrorAlert name="errorAlert" message={validationErrMsg} />
      <SuccessAlert name="successAlert" message={successErrMsg} noIcon />
    </>
  );
};

export default SignInPage;
