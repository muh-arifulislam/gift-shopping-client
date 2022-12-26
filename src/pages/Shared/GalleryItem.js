import React from "react";
import image from "../../assets/images/ezif.jpg";
const GalleryItem = () => {
  return (
    <div className="bg-white rounded-sm">
      <img className="p-2" src={image} alt="" />
    </div>
  );
};

export default GalleryItem;
