import React from "react";
import BtnPrimary from "../Shared/BtnPrimary";
import ShoppingCartItem from "./ShoppingCartItem";
const ShoppingCart = () => {
  return (
    <section className="lg:px-[150px] lg:py-[60px] bg-slate-100">
      <div>
        <div className="">
          <h1 className="text-center font-secondary my-[30px]">Basket</h1>
          <table
            id="basket-table"
            className="shadow-md border border-slate-200"
          >
            <thead>
              <tr className="hidden-in-mobile border border-slate-200">
                <th>#</th>
                <th>Image</th>
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
              <ShoppingCartItem></ShoppingCartItem>
              <ShoppingCartItem></ShoppingCartItem>
              <ShoppingCartItem></ShoppingCartItem>
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
                  <th>Subtotal</th>
                  <td>$3.99</td>
                </tr>
                <tr className="border border-slate-500">
                  <th>Subtotal</th>
                  <td>$3.99</td>
                </tr>
                <tr className="border border-slate-500">
                  <th>Total</th>
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
