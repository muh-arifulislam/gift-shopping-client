import React from "react";

const BtnSecondary = (props) => {
  const { onClick } = props;

  return (
    <button
      onClick={onClick}
      className="px-[25px] py-[7px] border border-primaryBorder rounded-sm text-primary hover:text-white hover:bg-primary prevent-select"
    >
      {props.children}
    </button>
  );
};

export default BtnSecondary;
