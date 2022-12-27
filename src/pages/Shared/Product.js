import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/images/p1.jpg";
import BtnPrimary from "../Shared/BtnPrimary";
import BtnSecondary from "../Shared/BtnSecondary";
import { useNavigate } from "react-router-dom";
import { addToDb } from "../../fakeDB";
const Product = ({ product }) => {
  const [save, setSave] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-white p-2 rounded-sm shadow-lg">
      <img className="cursor-pointer" src={image} alt="" />
      <div className="p-2">
        <h2 className="mb-2 text-xl text-slate-500 font-bold">
          {product?.name}
        </h2>
        <h4 className="mb-2 text-xl text-red-700 font-bold">
          ${product?.discountPrice}.00{" "}
          <span className="text-slate-700 line-through">
            {product?.price}.00
          </span>
        </h4>
        <div className="mb-2 flex justify-between items-center">
          <span>
            <FontAwesomeIcon color="gold" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon color="gold" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon color="gold" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon color="gold" icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon color="gray" icon={faStar}></FontAwesomeIcon>
          </span>
          <span onClick={() => setSave(!save)} className="cursor-pointer">
            <FontAwesomeIcon
              size="lg"
              color={`${save ? "red" : "gray"}`}
              icon={faHeart}
            ></FontAwesomeIcon>
          </span>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-1 gap-2 justify-between">
          <BtnPrimary onClick={() => navigate("/shopping-cart")}>
            Buy Now
          </BtnPrimary>
          <BtnSecondary onClick={() => addToDb(product?.id)}>
            Add To Cart
          </BtnSecondary>
        </div>
      </div>
    </div>
  );
};

export default Product;
