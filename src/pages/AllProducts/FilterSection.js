import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
const FilterSection = () => {
  return (
    <div>
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
