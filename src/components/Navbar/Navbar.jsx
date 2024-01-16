import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300 px-10">
        <div className="navbar-start">
          <h3  className="font-extrabold text-2xl text-gray-900 ml-3">
            <Link to={'/'}>COFFEE HOUSE</Link>
          </h3>
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Add Coffee</a>
              </li>
              <li>
                <a>Coffee house</a>
              </li>

              <li>
                <a>Blogs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li >
              <Link to={'/'}> <h4 className="text-base font-bold tracking-wide text-gray-900">MENU</h4> </Link>
            </li>
            <li >
              <Link to={'/addCoffee'}> <h4 className="text-base font-bold tracking-wide text-gray-900">ADD COFFEE</h4> </Link>
            </li>
            <li >
              <Link to={'/blogs'}> <h4 className="text-base font-bold tracking-wide text-gray-900">BLOGS</h4> </Link>
            </li>
         
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-sm">Reegister</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
