"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import NavLink from "./NavLink";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navItems = [
    { path: "/", name: "Home", dropdown: [] },
    { path: "/about", name: "About Us", dropdown: [] },
    {
      path: "/services",
      name: "Services",
      dropdown: [
        { path: "/services/software", dropName: "Custom Software Development" },
        { path: "/services/web", dropName: "Web Application Development" },
        {
          path: "/services/mobile",
          dropName: "Mobile Application Development",
        },
        { path: "/services/quality", dropName: "Quality assurance & Testing" },
      ],
    },
    { path: "/careers", name: "Careers", dropdown: [] },
    { path: "/contact", name: "Contact Us", dropdown: [] },
  ];
  return (
    <header className="w-full bg-primaryBg shadow sticky top-0 z-10">
      <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="/" className="font-bold text-3xl uppercase text-white">
          Top-<span className="text-primary">It</span>
        </Link>
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul className="items-center justify-center space-y-8 hidden md:flex md:space-x-6 md:space-y-0">
          {navItems.map(({ path, name, dropdown }) => (
            <li
              key={path}
              className="relative group"
              onMouseEnter={() => {
                if (dropdown?.length > 0) {
                  setDropdownVisible(!dropdownVisible);
                }
              }}
              onMouseLeave={() => {
                if (dropdown?.length > 0) {
                  setDropdownVisible(!dropdownVisible);
                }
              }}
            >
              <NavLink
                href={path}
                activeClassName="menuActive"
                className="text-gray2 hover:text-primary menuEffect"
                exact={path === "/"}
              >
                {name}
                {path === "/services" ? (
                  <BsFillCaretDownFill className="inline-block ml-1" />
                ) : null}
              </NavLink>
              {dropdown?.length > 0 && dropdownVisible && (
                <ul className="absolute left-4 md:-left-6 mt-2 space-y-2 bg-white text-gray-700 w-72 shadow-lg z-40">
                  {dropdown?.map(({ path: dropPath, dropName }) => (
                    <li
                      key={dropPath}
                      onClick={() => {
                        setNavbar(!navbar);
                        setDropdownVisible(false);
                      }}
                    >
                      <NavLink
                        activeClassName="block px-4 py-2 hover:bg-primary hover:text-white"
                        className="block px-4 py-2 hover:bg-primary hover:text-white"
                        exact={path === "/"}
                        href={dropPath}
                      >
                        {dropName}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* mobile */}
      {navbar && (
        <nav className="container mx-auto py-4 px-6  md:hidden justify-between items-center">
          <ul className="items-center justify-center space-y-8 mb-6">
            {navItems.map(({ path, name, dropdown }) => (
              <li
                key={path}
                className="relative group"
                onClick={() => {
                  if (dropdown?.length > 0) {
                    setDropdownVisible(!dropdownVisible);
                  }
                }}
              >
                <NavLink
                  href={path}
                  activeClassName="menuActive"
                  className="text-gray2 hover:text-primary menuEffect"
                  exact={path === "/"}
                >
                  {name}
                  {path === "/services" ? (
                    <BsFillCaretDownFill className="inline-block ml-1" />
                  ) : null}
                </NavLink>
                {dropdown?.length > 0 && dropdownVisible && (
                  <ul className="z-40 text-white pt-4 flex flex-col gap-4 pl-4">
                    {dropdown?.map(({ path: dropPath, dropName }) => (
                      <li
                        key={dropPath}
                        onClick={() => {
                          setNavbar(!navbar);
                        }}
                      >
                        <NavLink
                          activeClassName="block px-4 py-2 hover:bg-primary hover:text-white"
                          className="block px-4 py-2 hover:bg-primary hover:text-white"
                          exact={path === "/"}
                          href={dropPath}
                        >
                          {dropName}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
