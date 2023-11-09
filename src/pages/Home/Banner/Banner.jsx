import { Link } from "react-router-dom";
import banner1 from "../../../assets/img/banner1.jpg";
import banner2 from "../../../assets/img/banner2.jpg";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero relative w-full  min-h-screen  ">
      <div className="overlay"></div>
      <div className="bg-img"></div>
      <div className="hero-content  text-center text-neutral-content relative z-20">
        <div className="max-w-xl">
          <h1 className="mb-5 text-2xl lg:text-5xl textw font-bold ">
            Welcome <br /> To <br />
            Bookify Library
          </h1>
          <p className="mb-5">
            Welcome to Bookify Library, your gateway to a world of knowledge,
            where every page is an adventure waiting to be explored.
          </p>
          <button className="btn bg-primary-color border-none text-white hover:bg-white hover:text-primary-color">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
