import React, { useState } from "react";

import { Container, Row } from "reactstrap";

import CommonSection from "../components/UI/CommonSection";

import "../styles/shop.css";

import products from "../assets/data/products";

import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "gray") {
      const filteredProducts = products.filter(
        (item) => item.category === "gray"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "blue") {
      const filteredProducts = products.filter(
        (item) => item.category === "blue"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "brown") {
      const filteredProducts = products.filter(
        (item) => item.category === "brown"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "pink") {
      const filteredProducts = products.filter(
        (item) => item.category === "pink"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "red") {
      const filteredProducts = products.filter(
        (item) => item.category === "red"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = e => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchedProducts)
  }

  return (
    <>
      <CommonSection title="محصولات" />
      <section className="shop__section">
        <div class="d-flex justify-content-around">
          <div class="container text-center">
            <div class="row align-items-center">
              <div class="col">
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                    <option>فیلتر کردن بر اساس...</option>
                    <option value="gray">خاکستری</option>
                    <option value="blue">آبی</option>
                    <option value="brown">قهوه ای</option>
                    <option value="pink">صورتی</option>
                    <option value="red">قرمز</option>
                  </select>
                </div>
              </div>

              <div class="col">
                <div className="search__box">
                  <form class="d-flex" role="search">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="جستجو..."
                      onChange={handleSearch}
                      aria-label="Search"
                    />
                    <button class="btn" type="submit">
                      <i class="bi bi-search-heart"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product__all">
        <Container>
          <Row className="row-cols-md-5 g-4 d-flex justify-content-center">
            {productsData.length === 0 ? (
              <h1>محصولی یافت نشد!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Shop;
