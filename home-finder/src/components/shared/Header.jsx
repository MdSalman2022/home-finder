import React from "react";
import { NavLink } from "react-router-dom";

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

  const activeClassName = "border-b border-blue-600 text-blue-600 h-8";

  return (
    <div className="container mx-auto">
      <div className="flex justify-between w-full py-5">
        <span>Logo</span>
        <div className="flex gap-5">
          {navlinks.map((link, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "text-black h-8"
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
