import React from "react";
import HeadingCarousel from "./HeadingCarousel";

const Home = () => {
  return (
    <section>
      <HeadingCarousel></HeadingCarousel>
      <div className="py-[20px] bg-slate-400">
        <h1>this is home page</h1>
      </div>
    </section>
  );
};

export default Home;
