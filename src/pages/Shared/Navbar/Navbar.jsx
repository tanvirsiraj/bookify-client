import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiBookReader } from "react-icons/bi";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  console.log(toggle);
  return (
    <div className="bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 text-black px-2 lg:px-0">
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
              ? "-left-[600px] duration-500 lg:duration-0  absolute lg:static bg-primary-color lg:bg-white text-white lg:text-black  shadow-lg lg:shadow-none top-0 h-[100%]  max-w-[600px] lg:w-auto  ps-4 pt-20 lg:pt-0 space-y-4 lg:space-y-0  lg:flex items-center lg:gap-8"
              : " left-0 duration-1000 lg:duration-0 absolute lg:static bg-primary-color lg:bg-white text-white lg:text-black  shadow-lg lg:shadow-none top-0 h-[100%]  w-40 md:w-80 lg:w-auto  ps-4 pt-20 lg:pt-0 space-y-4 lg:space-y-0  lg:flex items-center lg:gap-8"
          }
        >
          <li>
            <NavLink to="/" className="text-base lg:text-lg ">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/addBook" className="text-base lg:text-lg ">
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink to="/allBooks" className="text-base lg:text-lg">
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/borrowedBooks" className="text-base lg:text-lg">
              Borrowed Books
            </NavLink>
          </li>
          <div className="lg:hidden">
            <Link to="login">Login</Link>
          </div>
        </ul>
        <div className="lg:flex items-center ">
          <div className="hidden lg:block bg-primary-color px-4 text-white py-2 rounded-md text-lg font-semibold">
            <Link to="login">Login</Link>
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
