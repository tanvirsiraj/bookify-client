import { useContext, useEffect, useState } from "react";
import FeedBackCard from "./FeedBackCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./FeedBack.css";
import { AuthContext } from "../../../Context/AuthProvider";
const FeedBack = () => {
  const [peoples, setPeoples] = useState([]);
  const { theme, setTheme } = useContext(AuthContext);

  useEffect(() => {
    fetch("/people.json")
      .then((res) => res.json())
      .then((data) => setPeoples(data));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-2 lg:mx-0 my-10 mb-10">
      <div className="max-w-6xl  mx-auto">
        <h1 className="text-2xl md:text-4xl font-semibold mb-6 text-center text-black dark:text-white">
          What People Say
        </h1>
        <Slider {...settings} className={theme === "dark" && "dark-slider"}>
          {peoples.map((people, index) => (
            <FeedBackCard people={people} key={index}></FeedBackCard>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeedBack;
