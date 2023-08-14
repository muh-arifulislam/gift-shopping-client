import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/images/p1.jpg";
import BtnPrimary from "../Shared/BtnPrimary";
import BtnSecondary from "../Shared/BtnSecondary";
import { Link, useNavigate } from "react-router-dom";
import { addToDb } from "../../fakeDB";
const Product = ({ product }) => {
  const [save, setSave] = useState(false);
  const navigate = useNavigate();
  let discountedPrice = product?.price;
  if (product.priceCutOffer.isOfferAvailable) {
    discountedPrice = product.priceCutOffer.discountedPrice;
  }
  return (
    <div className="bg-white p-2 rounded-sm shadow-lg">
      <Link to={`/products/${product._id}`}>
        <img className="" src={product?.images?.md} alt="" />
      </Link>
      <div className="p-2">
        <Link to={`/products/${product._id}`}>
          <h2 className="mb-2 text-xl text-slate-500 font-bold">
            {product?.name}
          </h2>
        </Link>
        <div>
          <h4 className="mb-2 text-xl text-red-700 font-bold">
            <span className="mr-4">${discountedPrice}</span>
            <span className="text-red-400 line-through">{product?.price}</span>
          </h4>
        </div>
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
