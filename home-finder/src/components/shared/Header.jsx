import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import MobileHeader from "./MobileHeader";
import { FaPlus } from "react-icons/fa";
import { StateContext } from "@/contexts/StateProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "@/contexts/AuthProvider";
import { toast } from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, logOut,googleLogIn } = useContext(AuthContext); 

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
      title: "Decor",
      path: "/decor",
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
      className={`${
        pathname === "/" || "/shifting"
          ? "container-lg px-0 md:px-10 2xl:px-0"
          : " container-sm"
      } mx-auto`}
    >
      <div className="hidden md:flex flex-col md:flex-row items-center justify-between w-full py-3">
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
          {!user?.uid && (
            <span
              onClick={googleLogIn}
              className="primary-btn bg-white border border-black text-black hover:text-black font-semibold flex items-center gap-5"
            >
              <FcGoogle /> Continue With Google
            </span>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger>
              {user?.uid && (
                <div className="flex items-center gap-2">
                  <span className="">
                    Hi, {user?.displayName.split(" ")[0]}
                  </span>
                  <img
                    className="w-10 h-10 rounded-full border"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link className="w-full h-full" to="/account">
                  Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="w-full h-full" to="/account/personal-info">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  logOut();
                  toast.success("Logged Out Successfully");
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <MobileHeader />
    </div>
  );
};

export default Header;
