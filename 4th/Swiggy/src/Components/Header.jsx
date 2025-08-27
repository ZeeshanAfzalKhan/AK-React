import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedUser } = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart.items);

  const linkClass = (isActive) =>
    `text-base px-4 py-2 transition-colors duration-300 ${
      isActive ? "text-yellow-500" : "text-white"
    }`;

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="font-extrabold">LOGO</div>
      <div className="flex items-center space-x-6">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => linkClass(isActive) }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => linkClass(isActive)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => linkClass(isActive)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => linkClass(isActive)}
            >
              Cart - {cartItems.length} items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instamart"
              className={({ isActive }) => linkClass(isActive)}
            >
              Instamart
            </NavLink>
          </li>
        </ul>
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white hover:cursor-pointer"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            console.log(btnName);
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
