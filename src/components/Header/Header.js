import React from "react";

import "./header.css";

import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const nav__Links = [
  {
    path: "home",
    display: "خانه",
  },
  {
    path: "shop",
    display: "محصولات",
  },
  {
    path: "cart",
    display: "کارت",
  },
];

const Header = () => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const totalFavoriteQuantity = useSelector(state => state.favorite.totalFavoriteQuantity)

  const navigate = useNavigate()

  const NavigateToCart = () => {
    navigate("/cart");
  }

  const NavigateToFavorite = () => {
    navigate("/favorite");
  }


  return (
    <header className="header">
      <nav class="navbar sticky-top navbar-expand-lg">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/home">
            <img
              src="../../images/logo/Logo.png"
              alt="لوگو"
              width="80"
              height="74"
              class="d-inline-block align-text-center"
            />
            زنبورک
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {nav__Links.map((item) => (
                <li class="nav-item">
                  <Link class="nav-link" to={item.path}>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/favorite">
                <span onClick={NavigateToFavorite}>{totalFavoriteQuantity}</span>
                  <i class="bi bi-suit-heart"></i>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/cart">
                  <span onClick={NavigateToCart}>{totalQuantity}</span>
                  <i class="bi bi-bag-heart-fill"></i>
                </Link>
              </li>
              <motion.li whileTap={{ scale: 1.2 }} class="nav-item">
                <Link class="nav-link" to="/login">
                  <i class="bi bi-person-heart"></i>
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
