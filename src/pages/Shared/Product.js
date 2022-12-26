import React from "react";
import image from "../../assets/images/p1.jpg";
import BtnPrimary from "../Shared/BtnPrimary";
import BtnSecondary from "../Shared/BtnSecondary";
const Product = () => {
  return (
    <div className="bg-white p-2 rounded-sm shadow-lg">
      <img src={image} alt="" />
      <div className="p-2">
        <h2>Personalised Birthday Easel</h2>
        <h4>
          $44.00 <span>60.00</span>
        </h4>
        <div>
          <BtnPrimary>Buy Now</BtnPrimary>
          <BtnSecondary>Add To Cart</BtnSecondary>
        </div>
      </div>
    </div>
  );
};

export default Product;
