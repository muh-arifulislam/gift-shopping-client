import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import FeatureProducts from "./FeatureProducts";
import HeadingCarousel from "./HeadingCarousel";

const Home = () => {
  return (
    <section>
      <HeadingCarousel></HeadingCarousel>
      <FeatureProducts></FeatureProducts>
    </section>
  );
};

export default Home;
