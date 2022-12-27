import React from "react";

const BtnSecondary = (props) => {
  return (
    <button className="px-[25px] py-[7px] border border-red-500 rounded-sm text-red-500 hover:text-white hover:bg-red-500 prevent-select">
      {props.children}
    </button>
  );
};

export default BtnSecondary;
