import React from "react";

import CommonSection from "../components/UI/CommonSection";

import { Container, Row, Col } from "reactstrap";

import { favoriteActions } from "../redux/slice/favoriteSlice";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import '../styles/favorite.css'


const Favorite = () => {

  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);

  return (
    <>
      <CommonSection title="علاقه مندی ها" />
      <section className="Favorite">
        <Container>
          <Row>
            <Col>
              {favoriteItems.length === 0 ? (
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
                    {favoriteItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col>
              <div>
                <br />
                <Link to="/shop">
                  <button type="button" className="buy__btn">
                    بازگشت و افزودن{" "}
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(favoriteActions.deleteItem(item.id));
  };

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

export default Favorite;
