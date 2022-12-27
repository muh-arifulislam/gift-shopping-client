import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faChevronRight,
  faHouseChimney,
  faStar,
  faHeart,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import image from "../../assets/images/p1.jpg";
import BtnPrimary from "../Shared/BtnPrimary";
import BtnSecondary from "../Shared/BtnSecondary";
const ProductDetails = () => {
  return (
    <section className="">
      <div className="py-[68px] page-heading text-slate-600 lg:px-[80px] px-[20px] bg-slate-100">
        <h1 className="text-3xl font-bold mb-3">Personalised Birthday Easel</h1>
        <ul className="flex lg:flex-row flex-col lg:gap-0 gap-2 items-center lg:justify-start justify-center">
          <div className="flex items-center lg:justify-start justify-center">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faHouseChimney}
                className="mr-[3px]"
              ></FontAwesomeIcon>
              <Link to="/">Home</Link>
              <span className="mx-2 flex">
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="ml-[-5px]"
                ></FontAwesomeIcon>
              </span>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
          </div>
          <li className="flex items-center">
            <span className="mx-2 flex">
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="ml-[-5px]"
              ></FontAwesomeIcon>
            </span>{" "}
            Personalised Birthday Easel
          </li>
        </ul>
      </div>
      <div className="lg:px-[80px] px-[20px] bg-white">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:p-[80px]">
          <img className="mx-auto" src={image} alt="" />
          <div className="col-span-2 lg:px-5 px-0">
            <h2 className="text-3xl mb-2">Personalised Birthday Easel</h2>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              hendrerit libero pellentesque libero interdum, id mattis felis
              dictum. Praesent eget lacus tempor justo efficitur malesuada. Cras
              ut suscipit nisi eget lacus tempor justo efficitur.
            </p>
            <h4 className="mb-2 text-2xl text-red-500">
              $44.00 <span className="text-slate-500 line-through">60.00</span>
            </h4>
            <div className="flex justify-between items-center mb-2">
              <span>
                <FontAwesomeIcon
                  color="gold"
                  size="lg"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  color="gold"
                  size="lg"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  color="gold"
                  size="lg"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  color="gold"
                  size="lg"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  color="gray"
                  size="lg"
                  icon={faStar}
                ></FontAwesomeIcon>
              </span>
              <span>
                <FontAwesomeIcon
                  size="lg"
                  color="gray"
                  icon={faHeart}
                ></FontAwesomeIcon>
              </span>
            </div>
            <div className="mt-4 mb-4 flex gap-5">
              <BtnPrimary>Buy Now</BtnPrimary>
              <BtnSecondary>Add To Cart</BtnSecondary>
            </div>
            <div>
              <ul className="grid lg:grid-cols-2 grid-cols-1 mb-2">
                <li>
                  <FontAwesomeIcon
                    className="mr-[5px]"
                    color="gray"
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                  Newly Added sdfsdf
                </li>
                <li>
                  <FontAwesomeIcon
                    className="mr-[5px]"
                    color="gray"
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                  Newly Added asdfasdf asdfasd
                </li>
                <li>
                  <FontAwesomeIcon
                    className="mr-[5px]"
                    color="gray"
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                  Newly Addedfsa sdf sd
                </li>
                <li>
                  <FontAwesomeIcon
                    className="mr-[5px]"
                    color="gray"
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                  Newly Addeddf sdf sdf
                </li>
                <li>
                  <FontAwesomeIcon
                    className="mr-[5px]"
                    color="gray"
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                  Newly Added
                </li>
                <li>
                  <FontAwesomeIcon
                    className="mr-[5px]"
                    color="gray"
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                  Newly Added
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h4 className="text-2xl mb-2">Product Description</h4>
        <p>
          <span className="inline-block mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            adipisci optio exercitationem vero repellat, ex, a modi id assumenda
            laborum suscipit provident facilis tenetur sapiente iure expedita
            deleniti saepe, necessitatibus impedit magni rem voluptates
            molestias accusantium? Id eveniet illum nobis officia repudiandae
            excepturi quis exercitationem, facilis nam numquam adipisci!
            Quisquam?
          </span>
          <span className="inline-block mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
            necessitatibus aut fugiat iusto dignissimos ipsum laboriosam eum
            reiciendis placeat adipisci esse beatae libero, veritatis quos quo
            et culpa voluptates dolore reprehenderit est odit quia ad nam? Omnis
            laboriosam aspernatur quisquam, quibusdam eveniet ab cupiditate
            sapiente. Autem neque doloremque officiis atque!
          </span>
          <span className="inline-block mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            iusto officia perferendis inventore quod voluptates laborum nisi
            qui, eveniet ducimus exercitationem adipisci aut omnis nam modi odio
            iure voluptatibus, eaque accusantium et obcaecati molestias. Ipsa
            porro iure enim sint quo. Voluptatibus mollitia culpa esse eius
            delectus quas aperiam praesentium excepturi?
          </span>
        </p>
      </div>
    </section>
  );
};

export default ProductDetails;
