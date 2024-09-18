import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-green-300 flex justify-between p-5 items-center">
      <div>
        <Link className="font-semibold text-gray-800" to={"/"}>
          Dinesh Blog
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li className=" p-2 rounded-md bg-blue-700 text-white hover:bg-blue-900 cursor-pointer">
          <Link to={"/"}> Home</Link>
        </li>
        <li className=" p-2 rounded-md bg-blue-700 text-white  hover:bg-blue-900 cursor-pointer">
          <Link to={"/about"}>About</Link>
        </li>
        <li className=" p-2 rounded-md bg-blue-700 text-white  hover:bg-blue-900 cursor-pointer">
          <Link to={"/contact"}> Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
