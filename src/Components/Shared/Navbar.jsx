import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import React from "react";
import logo from "./../../asset/loogo.png";
// import Home from "@/app/page";

import { PiShoppingCartLight } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Service",
      path: "/service",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="bg-slate-900 text-white">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
          <div>
            <Link href={"/"} className="">
              <Image
                alt=""
                src={logo}
                height={60}
                width={60}
                className=" mx-12"
              />
              <span>
                <h1 className=" mx-7 text-xl font-semibold hover:text-orange-700 ">
                  PatholeFix
                </h1>
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                className="font-semibold hover:text-orange-700"
                href={item.path}
                key={item.path}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {/* <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul> */}
        </div>
        <div className="navbar-end">
          <div className=" flex items-center space-x-3">
            <PiShoppingCartLight className="text-2xl" />
            <FiSearch className="text-2xl" />
            <a className="btn btn-outline btn-primary px-8  hover: text-white">
              Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
