"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll/modules";

const NavItems = [
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Resume",
    page: "about",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Skills",
    page: "skills",
  },
];

const val = "<Mohd />";

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);

  return (
    <header className="w-screen mx-auto fixed top-5 left-5 z-50">
      <div className="justify-between md:flex">
        <div className="md:flex md:space-x-4">
          <h1 className="text-xl font-normal mr-2 tracking-tight">{val}</h1>
          <button
            className="md:hidden absolute top-0 right-10 p-1 text-gray-500 rounded-md outline-none focus:border-gray-600 focus:border-4"
            onClick={() => setNavBar(!navBar)}
          >
            <IoMdMenu size={30}></IoMdMenu>
          </button>
          <div
            className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
              navBar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-5 md:flex md:space-x-4 md:space-y-0 text-lg font-light tracking-tight">
              {NavItems.map((item, i) => {
                return (
                  <Link
                    key={i}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavBar(!navBar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
