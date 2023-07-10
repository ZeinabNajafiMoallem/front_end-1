import React, { useState, useRef, useEffect } from "react";

import { useParams } from "react-router-dom";

import products from "../assets/data/products";

import CommonSection from "../components/UI/CommonSection";

import Rating from "../components/UI/Rating";

import "../styles/product-details.css";

import { Container, Row, Col } from "reactstrap";

import ProductsList from "../components/UI/ProductsList";

import { useDispatch } from "react-redux";

import { cartActions } from "../redux/slice/cartSlice";

import { toast } from "react-toastify";

import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const [tab, setTab] = useState("desc");

  const relatedProducts = products.filter((item) => item.category === category);

  const reviewUser = useRef("");

  const reviewMsg = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.valueOf;
    const reviewUserMsg = reviewMsg.current.valueOf;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success("نظر شما ثبت گردیده است.");
  };

  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);
  const [isHover, setIsHover] = useState(null);

  const getReviewLabel = (rating) => {
    switch (rating) {
      case 1:
        return `خیلی بد ${String.fromCodePoint("0x1F922")}`;
      case 2:
        return `بد ${String.fromCodePoint("0x1F97A")}`;
      case 3:
        return `خوب ${String.fromCodePoint("0x1F60C")}`;
      case 4:
        return `خیلی خوی ${String.fromCodePoint("0x1F60A")}`;
      case 5:
        return `عالی ${String.fromCodePoint("0x1F929")}`;

      default:
        return "";
    }
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItam({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("محصول اضافه شده.");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <>
      <CommonSection title={productName} />
      <section className="product__details">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={imgUrl}
                class="img-fluid rounded-start"
                alt="تصویر موجود نیست."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body product__body">
                <h2 class="card-title">{productName}</h2>
                <div className="product__rating">
                  <div>
                    <span>
                      <Rating value={avgRating} color={"#f8e825"} />
                    </span>
                  </div>
                </div>
                <br />
                <span className="product__price">{price} تومان </span>
                <br />
                <br />
                <span className="product__desc">{shortDesc}</span>
                <br />
                <br />
                <button type="button" class="buy__btn" onClick={addToCart}>
                  افزودن به کارت
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product__details__2">
        <Container>
          <Col>
            <div className="tab__wrapper">
              <h6
                className={`${tab === "desc" ? "active_tab" : ""}`}
                onClick={() => setTab("desc")}
              >
                Description
              </h6>
              <h6
                className={`${tab === "rev" ? "active_tab" : ""}`}
                onClick={() => setTab("rev")}
              >
                Reviews ({reviews.length})
              </h6>
            </div>
            {tab === "desc" ? (
              <div className="tab__content mt-5">
                <p>{description}</p>
              </div>
            ) : (
              <div className="product__review">
                <div className="review__wrapper">
                  <ul>
                    {reviews?.map((item, index) => (
                      <li key={index}>
                        <h6>something</h6>
                        <span>(rating){item.rating}</span>
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ul>

                  <form onSubmit={submitHandler}>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        نام:
                      </label>
                      <input
                        ref={reviewUser}
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="نام را وارد کنید."
                        required
                      />
                    </div>
                    <div className="star-wrapper">
                      <h2 className="review-label">
                        {getReviewLabel(isHover > 0 ? isHover : rating)}
                      </h2>

                      <div className="star__icon">
                        {[...Array(5)].map((_, index) => {
                          const ratingValue = index + 1;

                          return (
                            <button
                              key={index}
                              onMouseOver={() => setIsHover(ratingValue)}
                              onMouseOut={() => setIsHover(null)}
                              onMouseEnter={() => setHoverFill(ratingValue)}
                              onMouseLeave={() => setHoverFill(null)}
                              onClick={() => setRating(ratingValue)}
                            >
                              <FaStar
                                className="FaStar"
                                size={80}
                                style={{
                                  color:
                                    ratingValue <= (hoverFill || rating)
                                      ? "#ffe101"
                                      : "#ccc",
                                }}
                                onChange={(ratingValue) =>
                                  setRating(ratingValue)
                                }
                                value={ratingValue}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        متن:
                      </label>
                      <textarea
                        ref={reviewMsg}
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="متن خود را وارد کنید."
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="buy_btn">
                      ارسال
                    </button>
                  </form>
                </div>
              </div>
            )}
          </Col>
        </Container>
      </section>

      <section className="related__title">
        <h3>
          <i class="bi bi-emoji-heart-eyes"></i> بیشتر ببینید...
        </h3>
        <Container>
          <Row className="row-cols-md-7 g-4 d-flex justify-content-center">
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
