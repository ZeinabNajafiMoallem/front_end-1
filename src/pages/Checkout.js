import React from "react";

import CommonSection from "../components/UI/CommonSection";

import "../styles/checkout.css";

import { useSelector } from "react-redux";


const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);


  return (
    <>
      <CommonSection title="تغییر و ویرایش" />
      <section className="checkout__section">
        <div class="row">
          <div class="col-8">
            <form class="row g-3">
              <div class="col-md-4">
                <label for="validationDefault01" class="form-label">
                  نام
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault01"
                  value=""
                  required
                />
              </div>
              <div class="col-md-4">
                <label for="validationDefault02" class="form-label">
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault02"
                  value=""
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="validationDefault03" class="form-label">
                  ایمیل
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="validationDefault03"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="validationDefault03" class="form-label">
                  آدرس
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault03"
                  required
                />
              </div>
              <div class="col-md-3">
                <label for="validationDefault05" class="form-label">
                  کدپستی
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault05"
                  required
                />
              </div>
            </form>
          </div>

          <div class="col-4">
            <div className="checkout__cart">
              <h6>
                تعداد اقلام : <span>{totalQty}</span>
              </h6>
              <h6>
                جمع کل : <span>{totalAmount} تومان</span>
              </h6>
              <h6>
                جمع تخفیف : <span>0 تومان</span>
              </h6>
              <h5>
                هزینه : <span>{totalAmount} تومان</span>
              </h5>
            </div>
            
            <button type="button" class="btn">
              خرید نهایی
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
