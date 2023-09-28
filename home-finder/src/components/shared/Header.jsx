import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Header = () => {
  const navlinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shifting",
      path: "/shifting",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Designers",
      path: "/designers",
    },
  ];

  const activeClassName =
    "border-b-2 border-blue-600 text-blue-600 h-8 font-semibold";

  const location = useLocation();

  const { pathname } = location;

  console.log("pathname", pathname);

  return (
    <div
      className={`${pathname === "/" ? "container" : "container-sm"} mx-auto`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full py-3">
        <Link to="/" className="flex gap-3 items-center">
          <img className="w-10 h-10" src={logo} alt="" />{" "}
          <div className="text-blue-600 font-semibold text-2xl cursor-pointer">
            Home<span className="text-[#272727] font-normal">Finder</span>
          </div>
        </Link>
        <div className="flex gap-5">
          {navlinks.map((link, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "text-black h-8 font-semibold hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
              }
              to={link.path}
              key={index}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="flex gap-2">
          <span className="primary-btn bg-blue-100 text-blue-600 font-semibold">
            Signin
          </span>
          <span className="primary-btn font-semibold">Signup</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
