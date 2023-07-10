import React from "react";
import { useState, useEffect } from "react";

import "../styles/home.css";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";

import { Container, Row } from "reactstrap";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "gray"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "blue"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "brown"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "red"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "pink"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
    <>
      <section className="hero__section">
        <div class="clearfix">
          <img
            src="../images/sliders/2.png"
            class="col-md-6 float-md-end mb-3 ms-md-3"
            alt="تصویر موجود نیست."
          />
          <p className="hero__subtitle">
            <i class="bi bi-magic"></i>&nbsp;&nbsp;پرطرفدارترین محصول در {year}
          </p>
          <p className="hero__title">اسم محصول</p>
          <br />
          <p className="hero__comment">توضیحات در مورد محصول</p>
          <br />
          <br />
          <p className="hero__btn">
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.1 }}
                type="button"
                class="btn"
              >
                همین حالا خرید کنید
              </motion.button>
            </Link>
          </p>
        </div>
      </section>
      <Services />
      <section className="trending__product">
        <h2 className="section__title">محصولات پرطرفدار</h2>
        <Container className="trending__card">
          <Row className="row-cols-md-5 g-4 d-flex justify-content-center">
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <h2 className="section__title">محصولات پر فروش</h2>
        <Container className="trending__card">
          <Row className="row-cols-md-5 g-4 d-flex justify-content-center">
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src="../images/sliders/2.png"
                class="img-fluid rounded-start"
                alt="تصویر موجود نیست."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body text-center">
                <h5 class="card-title">Card title</h5>
                <br/>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <br/>
                <br/>
                <div className="clock__top__content">
                  <Clock />
                  <Link to="/shop">
                    <br/>
                    <br/>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      type="button"
                      class="btn"
                    >
                      خرید کنید
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="new__arrivals">
      <h2 className="section__title">محصولات جدید</h2>
        <Container className="trending__card">
          <Row className="row-cols-md-5 g-4 d-flex justify-content-center">
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
      <h2 className="section__title">محبوب ترین محصولات</h2>
        <Container className="trending__card">
          <Row className="row-cols-md-5 g-4 d-flex justify-content-center">
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
