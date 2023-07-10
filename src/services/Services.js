import React from "react";

import { motion } from "framer-motion";

import "./services.css";
import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className="services">
      <div class="container text-center">
        <div class="row">
          {serviceData.map((item, index) => (
            <div class="col" key={index}>
              <motion.div whileHover={{ scale: 1.1 }}
                className="service__item"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i class={item.icon}></i>
                </span>
                <div>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
