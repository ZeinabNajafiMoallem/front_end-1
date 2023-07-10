import React, { useState } from "react";

import discountData from "../../assets/data/discount";

import { useSelector } from "react-redux";


function Discount() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  var discountAmount = 0;
  discountAmount = totalAmount - ((totalAmount * discountData.couponPercent) / 100)
  

  const [discount, setDiscount] = useState("");

  const destination = new Date(discountData.couponDate).getTime()

  return (
    <>
      <form>
        <label>کد تخفیف</label>
        <input
          type="text"
          name="discount"
          id="discount"
          value={discountData.coupon}
          onChange={discountAmount}
        />
        <span id="discounterror"></span>
        <button type="submit">اعمال</button>
        <h5>
          هزینه نهایی : <span>{discountAmount} تومان</span>
        </h5>
      </form>
    </>
  );
}

export default Discount;
