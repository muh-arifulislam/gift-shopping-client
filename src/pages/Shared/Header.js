import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEnvelope,
  faPhone,
  faSearch,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import BtnPrimary from "./BtnPrimary";
import logo from "../../assets/images/logo.jpg";
const Header = () => {
  return (
    <section>
      {/* heading top  */}
      <div className="lg:px-[80px] px-[10px] py-[10px] lg:py-[15px] bg-slate-200 flex  lg:flex-row flex-col justify-between items-center lg:gap-0 gap-5">
        <div className="flex lg:flex-row flex-col items-center lg:gap-[20px] gap-2">
          <p>
            <FontAwesomeIcon
              className="mr-[5px]"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            support@gitshopping.com
          </p>
          <p>
            <FontAwesomeIcon
              className="mr-[5px]"
              icon={faPhone}
            ></FontAwesomeIcon>
            +987 676 7676 676
          </p>
        </div>
        <div className="flex gap-5">
          <BtnPrimary>Login</BtnPrimary>
          <button className="px-[25px] py-[7px] border border-red-500 rounded-sm text-red-500 hover:text-white hover:bg-red-500">
            Sign Up
          </button>
        </div>
      </div>
      {/* heading search area  */}
      <div className="lg:px-[80px] px-[20px] py-[20px] lg:py-[15px] flex justify-between items-center">
        <div className="">
          <img className="lg:w-[70%] w-[80%]" src={logo} alt="" />
        </div>
        <div className="lg:block hidden">
          <input
            type="text"
            className="px-[10px] py-[10px] w-[500px] border border-r-0 border-slate-200 rounded-sm"
            placeholder="Search gift"
          />
          <button className="px-[15px] py-[10px] border border-l-0 border-slate-200 rounded-sm bg-slate-100">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
        </div>
        <div>
          <button className="px-[12px] py-[12px] rounded-sm relative border borer-slate-100 hover:bg-slate-100">
            <FontAwesomeIcon size="xl" icon={faCartShopping}></FontAwesomeIcon>
            <span className="px-[10px] py-[3px] rounded-full text-white bg-red-500 absolute top-0 right-0 translate-x-[50%] translate-y-[-50%]">
              2
            </span>
          </button>
          <button className="px-[12px] py-[12px] ml-5 rounded-sm relative border borer-slate-100 hover:bg-slate-100 lg:inline hidden">
            <FontAwesomeIcon size="xl" icon={faHeart}></FontAwesomeIcon>
            <span className="px-[10px] py-[3px] rounded-full text-white bg-amber-500 absolute top-0 right-0 translate-x-[50%] translate-y-[-50%]">
              2
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
