import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiBookReader } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  // console.log(toggle);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="bg-white fixed top-0 z-50 w-full  shadow-lg">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4  text-black px-2 lg:px-0">
        <div className="flex items-center gap-2">
          <BiBookReader className="text-primary-color text-3xl" />
          <Link
            to="#"
            className="text-2xl lg:text-3xl font-logo underline text-primary-color"
          >
            Bookify
          </Link>
        </div>
        <ul
          className={
            toggle
              ? "-left-[600px] z-20  duration-500 lg:duration-0  fixed  lg:static bg-primary-color lg:bg-white text-white lg:text-black  shadow-lg lg:shadow-none top-0 h-[100vh] lg:h-auto  max-w-[600px]  lg:w-auto  ps-4 pt-20 lg:pt-0 space-y-4 lg:space-y-0  lg:flex items-center lg:gap-8"
              : " left-0 z-20 duration-1000 lg:duration-0 fixed lg:static bg-primary-color lg:bg-white text-white lg:text-black  shadow-lg lg:shadow-none top-0 h-[100vh] lg:h-auto  w-40 md:w-80 lg:w-auto  ps-4 pt-20 lg:pt-0 space-y-4 lg:space-y-0  lg:flex items-center lg:gap-8"
          }
        >
          <li>
            <NavLink to="/" className="text-base lg:text-lg px-0">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/addBook" className="text-base  lg:text-lg px-0">
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink to="/allBooks" className="text-base lg:text-lg px-0">
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/borrowedBooks" className="text-base lg:text-lg px-0">
              Borrowed Books
            </NavLink>
          </li>
          <div className="lg:hidden">
            <Link to="login">Login</Link>
          </div>
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden lg:block bg-primary-color px-4 text-white py-2 rounded-md text-lg font-semibold">
            <Link to="login">Login</Link>
          </div>
          <div className="mt-2 lg:mt-0">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={handleToggle} />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-6 h-6 lg:w-8 lg:h-8 text-primary-color"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-6 h-6 lg:w-8 lg:h-8  text-primary-color"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <div className="lg:hidden">
            {" "}
            <label className="bg-none swap swap-rotate text-primary-color items-center">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={() => setToggle(!toggle)} />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
