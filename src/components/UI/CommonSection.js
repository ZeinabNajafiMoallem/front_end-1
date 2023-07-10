import React from "react";

import '../../styles/common-section.css'

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <div class="card text-bg-dark">
        <img src="../../images/sliders/2.png" class="card-img" alt="تصویر موجود نیست." />
        <div class="card-img-overlay text-center">
          <h1 class="card-title"><i class="bi bi-suit-heart-fill"></i>{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default CommonSection;
