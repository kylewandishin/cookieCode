import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faShop } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

Topbar.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
};
export default function Topbar(props) {
  const setPageOnClick = (page) => {
    props.setPage(page);
  };
  return (
    <div className="flex justify-between w-full">
      <div className="flex-col">
        <h1 className="text-3xl">Cookie Code</h1>
        <h6 className="text-[10px] text-[#aaaaaa]">v0.0.1</h6>
      </div>
      <div className="flex row-auto">
        <button
          className="flex items-center space-x-1"
          onClick={() => setPageOnClick("home")}
        >
          <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
          <span>Cookies</span>
        </button>
        <button
          className="flex items-center space-x-1"
          onClick={() => setPageOnClick("shop")}
        >
          <FontAwesomeIcon icon={faShop} className="w-4 h-4" />
          <span>Shop</span>
        </button>
        <button
          className="flex items-center space-x-1"
          onClick={() => setPageOnClick("account")}
        >
          <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
          <span>Account</span>
        </button>
      </div>
    </div>
  );
}
