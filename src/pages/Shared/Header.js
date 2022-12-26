import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import BtnPrimary from "./BtnPrimary";
const Header = () => {
  return (
    <section>
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
    </section>
  );
};

export default Header;
