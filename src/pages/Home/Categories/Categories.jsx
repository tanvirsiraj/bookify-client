import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Category from "./Category/Category";
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = "/categories";
  /* axiosSecure
    .get(url)
    .then((res) => {
      setCategories(res.data);
    })
    .catch((error) => {
      console.log(error);
    }); */

  const { isPending, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      axiosSecure.get(url).then((res) => {
        return res.data;
      }),
  });
  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  if (isPending)
    return (
      <div className="max-w-6xl mx-auto my-10 flex justify-center">
        <span className="loading  loading-spinner loading-lg"></span>
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="mx-2 lg:mx-0">
      <div className="max-w-6xl mx-auto mt-10 md:mt-14 ">
        <div className=" text-center">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            Our Categories
          </h1>

          <div className="max-w-3xl mx-auto mb-10">
            <Marquee>
              <p className="text-lg text-black">
                ---Our Categories include : Business | Computers & Tech | Health
                & Fitness | Travel | Sports | Self-Help
                <span className="me-4">---</span>
              </p>
            </Marquee>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-y-10">
          {categories.map((category, index) => (
            <Category key={index} category={category}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
