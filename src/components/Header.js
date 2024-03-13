import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { logedInUser } = useContext(UserContext);

  // Subscribing to store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-800 shadow-lg mb-2">
      <div className="logo">
        <img className="w-28" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex m-4 p-4 font-size text-lg items-center">
          <li className="px-4 tracking-widest text-white">
            Online Status: {onlineStatus ? "✔" : "🔴"}
          </li>
          <li className="px-4 tracking-widest text-white">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4 tracking-widest text-white">
            <Link to="/about">About Us </Link>
          </li>
          <li className="px-4 tracking-widest text-white">
            <Link to="/services">Cart - ({cartItems.length}) </Link>
          </li>
          <li className="px-4 tracking-widest text-white">
            <Link to="/contact">Contact Us </Link>
          </li>
          <button
            className="text-white border border-solid border-white p-2"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          {logedInUser && (
            <li className="px-4 tracking-widest text-white">{logedInUser}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
