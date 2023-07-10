import React from "react";

import "./footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div class="container text-end">
          <div class="row align-items-start">
            <div class="col">
              <div className="col__title">
                <h5>ارتباط با ما</h5>
              </div>
              <p>
                <i class="bi bi-geo-alt"></i> something
              </p>
              <p>
                <i class="bi bi-telephone"></i> something
              </p>
              <p>
                <i class="bi bi-envelope-paper-heart"></i> something
              </p>
            </div>
            <div class="col">
              <div className="col__title">
                <h5>لینک های کمکی</h5>
              </div>
              <p>
                <Link to="/shop">
                  <button type="button" class="btn">
                    خرید
                  </button>
                </Link>
              </p>
              <p>
                <Link to="/cart">
                  <button type="button" class="btn">
                    کارت
                  </button>
                </Link>
              </p>
              <p>
                <Link to="/login">
                  <button type="button" class="btn">
                    ورود
                  </button>
                </Link>
              </p>
              <p>
                <Link to="#">
                  <button type="button" class="btn">
                    حریم خصوصی
                  </button>
                </Link>
              </p>
            </div>
            <div class="col">
              <div className="col__title">
                <h5>دسته بندی برتر</h5>
              </div>
              <p>
                <Link to="#">
                  <button type="button" class="btn">
                    خاکستری
                  </button>
                </Link>
              </p>
              <p>
                <Link to="#">
                  <button type="button" class="btn">
                    آبی
                  </button>
                </Link>
              </p>
              <p>
                <Link to="#">
                  <button type="button" class="btn">
                    قهوه ای
                  </button>
                </Link>
              </p>
              <p>
                <Link to="#">
                  <button type="button" class="btn">
                    صورتی
                  </button>
                </Link>
              </p>
              <p>
                <Link to="#">
                  <button type="button" class="btn">
                    قرمز
                  </button>
                </Link>
              </p>
            </div>
            <div class="col">
              <div className="col__title">
                <img
                  width="60"
                  height="54"
                  src="../../images/logo/Logo.png"
                  alt="تصویر موجود نیست."
                  class="d-inline-block align-text-center"
                />
              </div>
              <h5 className="logo__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h5>
              <p className="logo__subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                nostrum accusantium iste, voluptas cumque provident! Consequatur
                officiis animi rem tempore voluptate cumque hic similique
                aperiam ut consectetur distinctio repudiandae quia quam quos,
                quas illo, iusto, necessitatibus odio veniam exercitationem quis
                voluptatibus debitis laboriosam! Esse debitis obcaecati
                blanditiis at impedit quibusdam!
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div class="container text-center">
        <p>copyright {year} ...</p>
      </div>
    </>
  );
};

export default Footer;
