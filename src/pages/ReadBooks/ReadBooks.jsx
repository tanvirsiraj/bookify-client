import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ReadBooks = () => {
  const [readFull, setReadFull] = useState(false);

  const data = useLoaderData();
  //   console.log(data);
  const { img, name, authorName, rating, category, overview } = data;
  const wordsArray = overview.split(" ");
  const firstPortion = wordsArray.slice(0, 40).join(" ");
  //   console.log(firstPortion);
  const handleFull = () => {
    setReadFull(overview);
  };
  return (
    <div className="max-w-6xl mx-auto mt-32">
      <div className="mx-2 lg:mx-0 py-4 bg-white  rounded-lg relative      px-2 ">
        <div className="flex gap-4  items-center ">
          <div className="">
            <img className="w-full h-60" src={img} alt="book" />
          </div>

          <div className="">
            <h2 className="text-black text-base font-semibold md:text-lg">
              {name}
            </h2>
            <p className="text-primary-color text-sm md:text-lg">
              By {authorName}
            </p>
            <p className="   text-gray-600  text-xs ">{category}</p>

            <Rating
              className="mt-2 "
              style={{ maxWidth: 80 }}
              value={rating}
              readOnly
            />
          </div>
        </div>
        <div className="  mt-4 text-sm md:text-base">
          <p className="font-semibold ">Book Overview:</p>
          {readFull ? (
            <div>
              {" "}
              <span>{overview}</span>
              <button
                onClick={() => setReadFull(!readFull)}
                className="ms-1 font-semibold hover:underline   text-primary-color"
              >
                Read Less
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <span>{firstPortion}</span>
              <button
                onClick={() => setReadFull(!readFull)}
                className="ms-1 font-semibold hover:underline text-primary-color"
              >
                Read Full Overview
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
