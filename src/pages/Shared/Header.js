import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEnvelope,
  faPhone,
  faSearch,
  faCartShopping,
  faHeart,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import BtnPrimary from "./BtnPrimary";
import logo from "../../assets/images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [navMenuMobile, setNavMenuMobile] = useState(false);
  const navigate = useNavigate();
  return (
    <section>
      {/* heading top  */}
      <div className="lg:px-[80px] px-[10px] py-[10px] lg:py-[15px] border border-slate-200 bg-slate-100 flex  lg:flex-row flex-col justify-between items-center lg:gap-0 gap-5">
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
          <img
            onClick={() => navigate("/")}
            className="lg:w-[70%] w-[80%] cursor-pointer"
            src={logo}
            alt=""
          />
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
          <button
            onClick={() => navigate("/shopping-cart")}
            className="px-[12px] py-[12px] rounded-sm relative border borer-slate-100 hover:bg-slate-100"
          >
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
      <div
        id="main-menu"
        className="bg-red-500 text-white lg:px-[80px] px-[10px]"
      >
        <nav className="main-menu">
          <div className="lg:hidden p-[16px] flex justify-between items-center">
            <p className="text-[19px] font-bold">Menu</p>
            <span onClick={() => setNavMenuMobile(!navMenuMobile)}>
              <FontAwesomeIcon size="xl" icon={faBars}></FontAwesomeIcon>
            </span>
          </div>
          <ul className="lg:flex hidden lg:flex-row flex-col justify-center lg:items-center">
            <li className="">
              <Link to="/all" className="nav-link">
                Categories
                <FontAwesomeIcon
                  className="ml-[5px]"
                  icon={faChevronDown}
                ></FontAwesomeIcon>
              </Link>
              <ul>
                <li>
                  <Link to="/baby">Baby</Link>
                </li>
                <li>
                  <Link to="/baby">Business & Executive Gifts</Link>
                </li>
                <li>
                  <Link to="/baby">Computer and Mobile Accessories</Link>
                </li>
                <li>
                  <Link to="/baby">Garden Gifts</Link>
                </li>
                <li>
                  <Link to="/baby">Gift Basket & Hampers</Link>
                </li>
                <li>
                  <Link to="/baby">Home & Living</Link>
                </li>
                <li>
                  <Link to="/baby">Love & Romance</Link>
                </li>
                <li>
                  <Link to="/baby">Beauty & Personal Care</Link>
                </li>
                <li>
                  <Link to="/baby">Chocolates & Cookies</Link>
                </li>
                <li>
                  <Link to="/baby">Flowers & Cakes</Link>
                </li>
                <li>
                  <Link to="/baby">Gag & Quireky Gifts</Link>
                </li>
                <li>
                  <Link to="/baby">Gift Cards</Link>
                </li>
                <li>
                  <Link to="/baby">Jewellery</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                Anniversary
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                Birthday
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                Personal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                Reception
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                Surprise
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul
            className={`${
              navMenuMobile ? "lg:hidden block" : "lg:hidden hidden"
            }`}
          >
            <li className="">
              <Link to="/all" className="nav-link">
                All Gifts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                Anniversary
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                Birthday
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                Personal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                Reception
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                Surprise
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
