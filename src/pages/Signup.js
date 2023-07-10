import React, { useState } from "react";

import { Link } from "react-router-dom";

import CommonSection from "../components/UI/CommonSection";

import "../styles/login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile ] = useState(null); 

  return (
    <>
      <CommonSection title="ایجاد حساب" />
      <section className="login__section">
        <div class="mb-3 row">
          <label for="validationServerUsername" class="col-sm-2 col-form-label">
            نام کاربری
          </label>
          <div class="col-sm-5">
            <input
              type="text"
              class="form-control"
              id="validationServerUsername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            ایمیل
          </label>
          <div class="col-sm-5">
            <input
              type="email"
              class="form-control"
              id="staticEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            رمز عبور
          </label>
          <div class="col-sm-5">
            <input
              type="password"
              id="inputPassword6"
              class="form-control"
              aria-labelledby="passwordHelpInline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
              دارای 8 تا 10 کاراکتر.
            </span>
          </div>
        </div>
        <div class="col-sm-5">
          <input class="form-control" type="file" id="formFile"
              onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div class="col-auto">
          <button type="submit" class="auth__btn d-grid gap-2 mx-auto">
            ایجاد حساب
          </button>
        </div>
        <div class="col-12">
          <div class="form-check">
            <label class="form-check-label" for="invalidCheck2">
              با شرایط و قوانین موافقم.
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
            </label>
          </div>
        </div>
        حساب کاربری دارید؟
        <Link to="/login">
          <button className="btn__account">ورود به حساب.</button>
        </Link>
      </section>
    </>
  );
};

export default Signup;
