import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";

const CategorisedBook = ({ data }) => {
  const { _id, img, name, authorName, category, rating } = data;
  return (
    <div className="py-4 bg-white shadow-md border rounded-lg relative grid grid-cols-2 items-center gap-2   px-2">
      <div className=" mx-auto  ">
        <img className="w-full h-60" src={img} alt="book" />
      </div>

      <div className="">
        <h2 className="text-black text-base font-semibold ">{name}</h2>
        <p className="text-primary-color text-sm">By {authorName}</p>
        <p className="   text-gray-600  text-xs ">{category}</p>

        <Rating
          className="mt-2 "
          style={{ maxWidth: 80 }}
          value={rating}
          readOnly
        />
        <div className="card-actions  mt-6">
          <Link
            to={`/bookDetails/${_id}`}
            className=" bg-primary-color text-white py-1 px-3 rounded  duration-300 hover:bg-black capitalize"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategorisedBook;
