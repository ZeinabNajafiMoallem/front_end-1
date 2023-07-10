import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { cartActions } from "../../redux/slice/cartSlice";

import { favoriteActions } from "../../redux/slice/favoriteSlice";

import { toast } from "react-toastify";

import "../../styles/product-card.css";

import { motion } from "framer-motion";

import { Col } from "reactstrap";

import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {

  const [clicked, setClicked] = useState(false);
  
  function handleClick(event) {
    setClicked(!clicked);
  }

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItam({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    toast.success("محصول به سبد اضافه شده است.");
  };

  const addToFavorite = () => {
    dispatch(
      favoriteActions.addItam({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    toast.success("محصول به علاقه مندی ها اضافه شده است.");
  };

  const deleteProduct = () => {
    dispatch(favoriteActions.deleteItem(item.id));
    toast.success("محصول از علاقه مندی ها حذف شده است.");
  };


  return (
    <Col>
      <div className="product__item">
        <div class="card">
          <motion.div whileHover={{ scale: 0.9 }} className="product_image">
            <img
              src={item.imgUrl}
              class="card-img-top"
              alt="تصویر موجود نیست."
            />
          </motion.div>
          <div class="card-body">
            <div className="p-2 product-info">
              <h5 class="card-title">
                <Link to={`/shop/${item.id}`}>
                  <button type="button" class="btn">
                    {item.productName}
                  </button>
                </Link>
              </h5>
            </div>
            <p class="card-text text-center">{item.category}</p>
            <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
              <span className="product_price">{item.price}&nbsp;تومان</span>
              <motion.button
                whileTap={{ scale: 1.2 }}
                onClick={addToCart}
                type="button"
                class="btn"
              >
                <i class="bi bi-patch-plus"></i>
              </motion.button>
              
                <div>
                  {clicked ? 
                  <motion.button
                  whileTap={{ scale: 1.2 }}
                  onClick={deleteProduct}
                  type="button"
                  class="btn"
                >
                  (
                    <span  onClick={handleClick} class="bi bi-suit-heart-fill">
                    </span>
                  )
                  </motion.button>
                   : 
                   <motion.button
                  whileTap={{ scale: 1.2 }}
                  onClick={addToFavorite}
                  type="button"
                  class="btn"
                >
                   (
                    <span onClick={handleClick} class="bi bi-suit-heart">
                    </span>
                  )
                  </motion.button>
                  }
                </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
