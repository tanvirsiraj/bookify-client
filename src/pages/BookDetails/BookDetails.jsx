import { Rating } from "@smastrom/react-rating";
import { Link, useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { _id, img, name, authorName, description, rating, category } = data;
  return (
    <div className="max-w-4xl mx-auto mt-32">
      <div className="mx-2 lg:mx-0 py-4 bg-white shadow-md border rounded-lg relative    md:grid md:grid-cols-5 md:items-center  px-2 ">
        <div className="flex gap-4 col-span-2 items-center ">
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
            <div className="card-actions  mt-6">
              <Link
                to={`/readBooks/${_id}`}
                className=" bg-black text-white py-1 px-3 rounded  duration-300 hover:bg-primary-color capitalize"
              >
                Read
              </Link>
              <Link
                to=""
                className=" bg-primary-color text-white py-1 px-3 rounded  duration-300 hover:bg-black capitalize"
              >
                Borrow
              </Link>
            </div>
          </div>
        </div>
        <div className=" col-span-3 mt-4 md:mt-0 text-sm md:text-base">
          <span className="font-semibold">Overview:</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
