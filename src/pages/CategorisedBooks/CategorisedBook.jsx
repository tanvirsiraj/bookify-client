import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const CategorisedBook = ({ data }) => {
  const { _id, img, name, authorName, category, rating } = data;
  return (
    <div className="py-4 bg-white shadow-md border rounded-lg relative grid grid-cols-2 items-center gap-1 lg:gap-2  px-2">
      <div className=" mx-auto  ">
        <img className="w-full h-60" src={img} alt="book" />
      </div>

      <div className="p-3 ">
        <h2 className="text-black text-base font-semibold ">{name}</h2>
        <p className="text-primary-color text-sm">By {authorName}</p>
        <p className="   text-gray-600  text-xs ">{category}</p>
        <p className="flex items-center  gap-1 mt-2">
          <AiFillStar className="text-[#FFC808] text-lg" />{" "}
          <span className=" text-black text-sm">{rating}</span>
        </p>
        <div className="card-actions  mt-6">
          <Link
            to={`/details/${_id}`}
            className="btn bg-primary-color border-none text-white px-6 duration-300 hover:bg-black capitalize"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategorisedBook;
