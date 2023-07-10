import React from "react";

import "../styles/cart.css";

import CommonSection from "../components/UI/CommonSection";

import { Container, Row, Col } from "reactstrap";

import { cartActions } from "../redux/slice/cartSlice";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <>
      <CommonSection title="کارت" />
      <section className="cart">
        <Container>
          <Row>
            <Col>
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">محصولی اضافه نشده.</h2>
              ) : (
                <table className="table__bordered">
                  <thead>
                    <tr className="head__table">
                      <th scope="col">تصویر</th>
                      <th scope="col">نام</th>
                      <th scope="col">قیمت</th>
                      <th scope="col">تعداد</th>
                      <th scope="col">حذف</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col>
            <div>
            <h6>جمع کل </h6>
            <br/>
            <span>تومان {totalAmount}</span>
            </div>
            <div>
              <br/>
              <Link to='/shop'><button type="button" className="buy__btn">بازگشت و افزودن به سبد</button></Link>
              <Link to='/checkout'><button type="button" className="checkout__btn">ادامه فرایند خرید</button></Link> 
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const Tr = ({ item }) => {

  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return (
    <tr className="second__table">
      <td>
        <img src={item.imgUrl} alt="تصویر موجود نیست."></img>
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <i class="bi bi-trash3" onClick={deleteProduct}></i>
      </td>
    </tr>
  );
};

export default Cart;
