import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHouseChimney,
  faStar,
  faHeart,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import BtnPrimary from "../Shared/BtnPrimary";
import ShoppingCartItem from "./ShoppingCartItem";
import { Link } from "react-router-dom";
const ShoppingCart = () => {
  const [cartDep, setCartDep] = useState(0);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
        const storedProducts = [];
        if (data) {
          for (const id in storedCart) {
            const addedProduct = data.find((product) => product.id === id);
            if (addedProduct) {
              const quantity = storedCart[id];
              addedProduct.quantity = quantity;
              storedProducts.push(addedProduct);
            }
          }
        }
        setCart(storedProducts);
      });
  }, [cartDep]);
  return (
    <section className="">
      <div className="py-[68px] page-heading text-slate-600 lg:px-[80px] px-[20px] bg-slate-100">
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
            <li>
              <Link to="/product">Products</Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="lg:px-[150px] lg:py-[60px] bg-slate-100">
        <div className="">
          <h1 className="text-center font-secondary my-[30px]">Basket</h1>
          <table
            id="basket-table"
            className="shadow-md border border-slate-200"
          >
            <thead>
              <tr className="hidden-in-mobile border border-slate-200">
                <th>#</th>
                <th style={{ textAlign: "center" }}>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th className="" style={{ textAlign: "center" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, p) => (
                <ShoppingCartItem
                  cartDep={cartDep}
                  setCartDep={setCartDep}
                  item={item}
                  serial={p}
                  key={item.id}
                ></ShoppingCartItem>
              ))}
            </tbody>
            <tfoot>
              {/* <tr className="">
                <td colSpan={6}>
                  <div className="flex lg:flex-row flex-col justify-between">
                    <div className="flex lg:gap-[5px] gap-[40px]">
                      <input
                        type="text"
                        placeholder="Coupon code"
                        className="input input-bordered w-full max-w-xs"
                      />
                      <BtnPrimary>Apply Coupon</BtnPrimary>
                    </div>
                    <small className="text-center mt-[10px] mb-[20px] text-slate-500 lg:hidden">
                      Please note: Mix and Match discount can not be used with
                      coupon discount.
                    </small>
                    <BtnPrimary>Update Basket</BtnPrimary>
                  </div>
                </td>
              </tr> */}
            </tfoot>
          </table>
        </div>
        <div className="lg:mx-[100px] mx-[10px] grid lg:grid-cols-2 grid-cols-1">
          <div></div>
          <div>
            <h2 className="font-secondary my-[30px]">Basket Total</h2>
            <table className="custom-table">
              <tbody>
                <tr className="border border-slate-500">
                  <th>Total</th>
                  <td>${total}</td>
                </tr>
                <tr className="border border-slate-500">
                  <th>Delivery</th>
                  <td>$100.00</td>
                </tr>
                <tr className="border border-slate-500">
                  <th>Grand Total</th>
                  <td>$3.99</td>
                </tr>
              </tbody>
            </table>
            <div className="my-[30px] flex justify-end">
              <BtnPrimary>Make Payment</BtnPrimary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
