import React from "react";
import GalleryItem from "../Shared/GalleryItem";
import Product from "../Shared/Product";
const FeatureProducts = () => {
  return (
    <section className="lg:px-[80px] pt-12 bg-slate-100">
      <div>
        <h2 className="text-center text-3xl mb-2">Featured Products</h2>
        <p className="text-center mb-2 px-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil alias
          quod illo incidunt vel labore, nulla est voluptatum nostrum
          asperiores.
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 lg:px-0 px-2 mt-12">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>
      <div className="py-7 grid lg:grid-cols-3 grid-cols-1 lg:px-0 px-2 gap-5">
        <GalleryItem></GalleryItem>
        <GalleryItem></GalleryItem>
        <GalleryItem></GalleryItem>
      </div>
    </section>
  );
};

export default FeatureProducts;
