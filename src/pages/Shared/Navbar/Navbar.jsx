import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiBookReader } from "react-icons/bi";
import "./Navbar.css";
import { AuthContext } from "../../../Context/AuthProvider";
import { useContext } from "react";
import ThemeSwitcher from "../../../ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
  const { user, logOut, theme } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // console.log("User Logout Successfully");
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  return (
    <div className="bg-white dark:bg-black  fixed top-0 z-50 w-full  shadow-lg">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4  text-black px-2 lg:px-0">
        <div className="flex items-center gap-2">
          <BiBookReader className="text-primary-color text-3xl dark:text-white" />
          <Link
            to="#"
            className="text-2xl lg:text-3xl font-logo underline text-primary-color dark:text-white"
          >
            Bookify
          </Link>
        </div>
        <ul
          className={
            toggle
              ? "-left-[600px] z-20  duration-500 lg:duration-0  fixed  lg:static bg-primary-color lg:bg-white text-white lg:text-black  shadow-lg lg:shadow-none top-0 h-[100vh] lg:h-auto  max-w-[600px]  lg:w-auto  ps-4 pt-20 lg:pt-0 space-y-4 lg:space-y-0  lg:flex items-center lg:gap-8 dark:bg-black dark:text-white "
              : " left-0 z-20 duration-1000 lg:duration-0 fixed lg:static bg-primary-color lg:bg-white text-white lg:text-black  shadow-lg lg:shadow-none top-0 h-[100vh] lg:h-auto  w-48 md:w-80 lg:w-auto  ps-4 pt-20 lg:pt-0 space-y-4 lg:space-y-0  lg:flex items-center lg:gap-8 dark:bg-black dark:text-white "
          }
        >
          <li>
            <NavLink to="/" className="text-base lg:text-lg px-0 ">
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
          <li className="list-none">
            {user ? (
              <div className="lg:hidden    items-center ">
                <div className="flex items-center mb-6">
                  <span className="text-white text-sm md:text-base">
                    {user?.displayName}
                  </span>
                  <div className="avatar ">
                    <div className="w-10 md:w-12 rounded-full mx-2">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
                <Link
                  onClick={handleLogout}
                  className="lg:hidden bg-white  text-primary-color px-4 py-2 rounded-md duration-500  font-semibold"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <Link
                className="lg:hidden bg-white text-primary-color px-4 py-2 rounded-md duration-500  font-semibold "
                to="/login"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <li className="list-none ">
            {user ? (
              <div className="hidden lg:flex  items-center px-2">
                <div className="flex items-center">
                  <span className="text-black dark:text-white">
                    {user?.displayName}
                  </span>
                  <div className="avatar">
                    <div className="w-12 rounded-full mx-2">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
                <Link
                  onClick={handleLogout}
                  className=" bg-primary-color text-white px-4 py-2 rounded-md duration-500 hover:text-black "
                >
                  Logout
                </Link>
              </div>
            ) : (
              <Link
                className="hidden lg:block bg-primary-color text-white px-4 py-2 rounded-md duration-500  font-semibold "
                to="/login"
              >
                Login
              </Link>
            )}
          </li>
          <div className="mt-2 lg:mt-0">
            <ThemeSwitcher />
          </div>
          <div className="lg:hidden">
            {" "}
            <label className="bg-none swap swap-rotate text-primary-color items-center dark:text-white">
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
