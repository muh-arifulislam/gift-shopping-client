import React from "react";

const BtnPrimary = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="px-[25px] py-[7px] bg-red-500 rounded-sm text-white hover:bg-red-700 prevent-select"
    >
      {props.children}
    </button>
  );
};

export default BtnPrimary;
