import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHouseChimney,
  faStar,
  faHeart,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Product from "../Shared/Product";
import FilterSection from "./FilterSection";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/client/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section>
      {/* section header  */}
      <div className="py-[68px] page-heading lg:px-[80px] px-[20px] bg-secondaryBorder">
        <h1 className="text-3xl font-bold mb-3 lg:text-start text-center">
          Shopping Cart
        </h1>
        <ul className="flex lg:flex-row flex-col lg:gap-0 gap-2 items-center lg:justify-start justify-center">
          <div className="flex items-center lg:justify-start justify-center">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faHouseChimney}
                className="mr-[3px]"
              ></FontAwesomeIcon>
              <Link to="/">Home</Link>
              <span className="mx-2 flex">
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="ml-[-5px]"
                ></FontAwesomeIcon>
              </span>
            </li>
            <li>Products</li>
          </div>
        </ul>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:px-[80px] px-[20px] py-[60px] bg-secondary-light">
        <FilterSection></FilterSection>
        <div className="col-span-3">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
            {products?.map((product) => (
              <Product product={product} key={product.id}></Product>
            ))}
          </div>
          <div className="mt-5 flex justify-end">
            <button className="px-3 py-1 border-l border-t border-b border-secondaryBorder rounded-l-md bg-white text-red-dark">
              Previous
            </button>
            <button className="px-3 py-1 border border-secondaryBorder bg-white text-red-dark">
              1
            </button>
            <button className="px-3 py-1 border border-secondaryBorder bg-red-dark text-white">
              2
            </button>
            <button className="px-3 py-1 border border-secondaryBorder bg-white text-red-dark">
              3
            </button>
            <button className="px-3 py-1 border-r border-t border-b border-secondaryBorder rounded-r-md bg-white text-red-dark">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
