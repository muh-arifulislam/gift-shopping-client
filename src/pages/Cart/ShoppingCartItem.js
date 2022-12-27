import React, { useEffect, useState } from "react";
import image from "../../assets/images/p1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { addToDb, deleteFromDb } from "../../fakeDB";
const ShoppingCartItem = ({ item, serial, cartDep, setCartDep }) => {
  const [quantity, setQuantity] = useState(item?.quantity);
  const [subtotal, setSubtotal] = useState(
    item?.discountPrice * item?.quantity
  );
  return (
    <tr className="responsive-table-row border border-slate-200">
      <td className="text-center">{serial + 1}</td>
      <td>
        <img className="w-[80px] h-[80px] mx-auto" src={image} alt="" />
      </td>
      <td className="responsive-table-data">
        <span>Product:</span>
        <span className="text-right">{item?.name}</span>
      </td>
      <td className="responsive-table-data">
        <span>Price:</span>
        <span>${item?.discountPrice}.00</span>
      </td>
      <td className="responsive-table-data">
        <span>Quantity:</span>
        <input
          onChange={(e) => {
            setQuantity(e.target.value);
            setSubtotal(item?.discountPrice * e.target.value);
            addToDb(item?.id, e.target.value);
          }}
          className="border rounded-sm w-[60px] px-[5px] py-[5px] text-sm"
          type="number"
          min="1"
          value={quantity}
        />
      </td>
      <td className="responsive-table-data">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </td>
      <td className="text-center">
        <button
          onClick={() => {
            deleteFromDb(item?.id);
            setCartDep(cartDep + 1);
          }}
          className="bg-red-600 hover:bg-red-800 p-2 rounded-sm"
        >
          <FontAwesomeIcon
            size="lg"
            color="white"
            icon={faTrashCan}
          ></FontAwesomeIcon>
        </button>
      </td>
    </tr>
  );
};

export default ShoppingCartItem;
