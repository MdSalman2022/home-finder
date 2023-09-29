import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "@/assets/logo.svg";

const MobileHeader = () => {
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
    " bg-blue-600 text-white h-8 font-semibold w-full pl-2 flex items-center rounded py-5";

  const location = useLocation();

  const { pathname } = location;

  console.log("pathname", pathname);

  return (
    <div className="flex md:hidden justify-between w-full p-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <GiHamburgerMenu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 ml-3">
          <DropdownMenuGroup>
            {navlinks?.map((link, index) => (
              <DropdownMenuItem key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? activeClassName
                      : "text-black h-8 font-semibold hover:text-white hover:bg-blue-600 w-full pl-2 flex items-center rounded py-5"
                  }
                  to={link.path}
                >
                  {link.title}
                </NavLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          {/*   <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
      <Link to="/" className="flex gap-3 items-center">
        <img className="w-8 h-8" src={logo} alt="" />{" "}
        <div className="text-blue-600 font-semibold text-xl cursor-pointer">
          Home<span className="text-[#272727] font-normal">Finder</span>
        </div>
      </Link>
      <div>
        <div className="flex gap-2">
          <span className="primary-btn font-semibold">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
