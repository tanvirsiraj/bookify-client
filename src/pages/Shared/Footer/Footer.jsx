import { BiBookReader } from "react-icons/bi";
import { AiFillTwitterCircle, AiOutlineCopyright } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-footer mt-2 md:mt-8 dark:bg-black text-black dark:text-white">
      <div className="footer-overlay"></div>
      <div className="max-w-6xl mx-auto text-center pt-20">
        <div className="flex items-center gap-2 justify-center">
          <BiBookReader className="text-primary-color text-3xl" />
          <Link
            to="#"
            className="text-2xl lg:text-3xl font-logo underline text-primary-color"
          >
            Bookify
          </Link>
        </div>
        <p className="max-w-2xl mx-auto mt-4 text-sm lg:text-base px-2 lg:px-0">
          Discover a world of literary wonders with Bookify Library, where
          stories come alive. Explore an extensive collection of books, from
          classics to contemporary reads, and embark on a journey of endless
          imagination.
        </p>
        <div className="flex gap-6 justify-center mt-4 items-center">
          <Link to="https://www.facebook.com/">
            {" "}
            <FaFacebook className="text-[#3E63B1] text-3xl dark:text-white"></FaFacebook>
          </Link>
          <Link to="https://www.twitter.com/">
            <AiFillTwitterCircle className="text-[#1CA2F2] text-3xl dark:text-white"></AiFillTwitterCircle>
          </Link>
          <Link to="https://www.linkedin.com/">
            {" "}
            <FaLinkedin className="text-[#0C65C3] text-3xl dark:text-white"></FaLinkedin>
          </Link>
          <Link to="https://www.instagram.com/">
            <FaInstagramSquare className="text-gradient  from-purple-700 via-pink-700 to-red-500 text-3xl dark:text-white"></FaInstagramSquare>
          </Link>
          <Link to="https://www.youtube.com/">
            {" "}
            <FaYoutube className="text-[#CE201F] text-4xl dark:text-white"></FaYoutube>
          </Link>
        </div>
        <div className="md:flex justify-center items-center mt-6 gap-8">
          <li className="list-none">
            <Link
              to="/"
              className="text-sm inline-block lg:text-lg px-0 hover:underline duration-100 hover:text-primary-color "
            >
              Home
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/addBook"
              className="text-sm  lg:text-lg px-0 hover:underline duration-100 hover:text-primary-color"
            >
              Add Book
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/allBooks"
              className="text-sm lg:text-lg px-0 hover:underline duration-100 hover:text-primary-color"
            >
              All Books
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/borrowedBooks"
              className="text-sm lg:text-lg px-0 hover:underline duration-100 hover:text-primary-color whitespace-nowrap "
            >
              Borrowed Books
            </Link>
          </li>
        </div>
      </div>
      <footer className="footer  py-4 border-t-2   text-base-content border-primary-color flex justify-center mt-10 text-black dark:text-white">
        <p className="flex justify-center items-center text-lg">
          Copyright <AiOutlineCopyright className="-me-2" />
          All Right Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
