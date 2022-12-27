import React, { useState } from "react";
import image from "../../assets/images/p1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const ShoppingCartItem = () => {
  //   const subtotal = (shoppingItem.price * shoppingItem.quantity).toFixed(2);
  //   const [quantity, setQuantity] = useState(shoppingItem.quantity);
  return (
    <tr className="responsive-table-row border border-slate-200">
      <td className="text-center">1</td>
      <td>
        <img className="w-[80px] h-[80px] mx-auto" src={image} alt="" />
      </td>
      <td className="responsive-table-data">
        <span>Product:</span>
        <span className="text-right">Lorem ipsum dolor</span>
      </td>
      <td className="responsive-table-data">
        <span>Price:</span>
        <span>$40</span>
      </td>
      <td className="responsive-table-data">
        <span>Quantity:</span>
        <input
          className="border rounded-sm w-[60px] px-[5px] py-[5px] text-sm"
          type="number"
          min="1"
          value="100"
        />
      </td>
      <td className="responsive-table-data">
        <span>Subtotal:</span>
        <span>$100</span>
      </td>
      <td className="text-center">
        <button
          onClick={() => console.log("clicked")}
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
