import React from "react";

import { Link } from "react-router-dom";

import CommonSection from "../components/UI/CommonSection";

import { useForm } from "react-hook-form";

import "../styles/login.css";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => alert(values.email + " " + values.password);

  return (
    <>
      <CommonSection title="ورود" />
      <section className="login__section">
        <div className="app">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formInput">
              <label>ایمیل</label>
              <input
                type="email"
                {...register("email", {
                  required: "",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "آدرس ایمیل شما نامعتبر است.",
                  },
                })}
              />
              {errors.email && errors.email.message}
            </div>
            <div className="formInput">
              <label>رمز عبور</label>
              <input
                type="password"
                {...register("password", {
                  required: "",
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                    message:
                      "رمز عبور باید شامل 8-20 کاراکتر و حداقل 1 عدد و 1 حرف و 1 نماد باشد.",
                  },
                })}
              />
              {errors.password && errors.password.message}
            </div>
            <button type="submit">ورود</button>
          </form>
        </div>
        حساب کاربری ندارید؟
        <Link to="/signup">
          <button className="btn__account">حساب کاربری ایجاد کنید.</button>
        </Link>
      </section>
    </>
  );
};

export default Login;
