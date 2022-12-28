import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
const FilterSection = () => {
  return (
    <div className="">
      {/* filter by category  */}
      <div className="mb-4">
        <h4 className="text-xl mb-4">Filter By Category</h4>
        <div className="ml-2">
          <ul>
            <li>
              <button>
                <FontAwesomeIcon
                  size="lg"
                  color="red"
                  icon={faSquareCheck}
                ></FontAwesomeIcon>
                <span className="ml-2">Baby</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon
                  size="lg"
                  color="red"
                  icon={faSquareCheck}
                ></FontAwesomeIcon>
                <span className="ml-2">Beauty & Personal Care</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon
                  size="lg"
                  color="red"
                  icon={faSquareCheck}
                ></FontAwesomeIcon>
                <span className="ml-2">Business & Executive</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* filter by price  */}
      <div className="mb-4">
        <h4 className="text-xl mb-4">Filter By Price</h4>
        <div className="ml-2">
          <ul>
            <li>
              <button>
                <FontAwesomeIcon
                  size="lg"
                  color="red"
                  icon={faSquareCheck}
                ></FontAwesomeIcon>
                <span className="ml-2">50$ t0 100$</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon
                  size="lg"
                  color="red"
                  icon={faSquareCheck}
                ></FontAwesomeIcon>
                <span className="ml-2">100$ to 200$</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon
                  size="lg"
                  color="red"
                  icon={faSquareCheck}
                ></FontAwesomeIcon>
                <span className="ml-2">200$ to 300$</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon
                  size="lg"
                  color="red"
                  icon={faSquareCheck}
                ></FontAwesomeIcon>
                <span className="ml-2">300$ to 400$</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-xl mb-4">Filter by Brand</h4>
        <div className="ml-2">
          <ul>
            <li>
              <button>
                <FontAwesomeIcon
                  size="lg"
                  color="red"
                  icon={faSquareCheck}
                ></FontAwesomeIcon>
                <span className="ml-2">Baby</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon
                  size="lg"
                  color="red"
                  icon={faSquareCheck}
                ></FontAwesomeIcon>
                <span className="ml-2">Beauty & Personal Care</span>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon
                  size="lg"
                  color="red"
                  icon={faSquareCheck}
                ></FontAwesomeIcon>
                <span className="ml-2">Business & Executive</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
