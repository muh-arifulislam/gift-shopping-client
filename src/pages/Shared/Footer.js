import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="">
      <div className="bg-secondary-dark text-secondaryBorder lg:px-[80px] px-5 py-5 grid lg:grid-cols-4 grid-cols-1 gap-[30px]">
        <div>
          <h4 className="text-xl mb-5 text-white">About Us</h4>
          <p className="text-justify mb-5">
            <small className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              hendrerit libero pellentesque libero interdum, id mattis felis
              dictum. Praesent eget lacus tempor justo efficitur malesuada. Cras
              ut suscipit nisi.
            </small>
          </p>
          <div>
            <p className="">
              <address>
                <small>23 Rose Stren Melbourn</small>
              </address>
            </p>
            <p>
              <small>sales@smarteyeapps.com</small>
            </p>
            <p>
              <small>+91 876 766 554</small>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-xl mb-5 text-white">Latest Post</h4>
          <p className="mb-2">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              hendrerit
            </small>
          </p>
          <p className="mb-2">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              hendrerit
            </small>
          </p>
          <p className="mb-2">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              hendrerit
            </small>
          </p>
        </div>
        <div>
          <h4 className="text-xl mb-5 text-white">Top Category</h4>
          <ul>
            <li className="mb-2">
              <Link to="/">
                <small>Home Science</small>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/">
                <small>Home Science</small>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/">
                <small>Home Science</small>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/">
                <small>Home Science</small>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/">
                <small>Home Science</small>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/">
                <small>Home Science</small>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl mb-5 text-white">News Letter</h4>
          <p className="mb-3">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              justo neque, vehicula eget eros.
            </small>
          </p>
          <div className="relative">
            <input
              className="bg-secondaryBorder px-3 py-2 w-full border border-secondaryBorder focus:outline-none focus:bg-white"
              type="text"
              placeholder="Recipient's email address"
            />
            <button className="bg-red-dark px-4 py-[7px] absolute top-0 bottom-0 right-0">
              <FontAwesomeIcon
                color="white"
                icon={faPaperPlane}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:px-[80px] px-5 py-5 bg-black">
        <p className="text-center text-white">
          2022 © All Rights Reserved | Designed and Developed by Md. Ariful
          Islam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
