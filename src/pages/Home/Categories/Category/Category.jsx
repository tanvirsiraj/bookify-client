import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { categoryName, img } = category;
  return (
    <div className="card duration-500 cursor-pointer bg-white shadow-md rounded-md flex justify-between">
      <div className="flex justify-center">
        <img src={img} alt="Shoes" className="h-44 w-full rounded-md" />
      </div>
      <div className="text-center mb-4 mt-4">
        <p className="font-semibold text-black">{categoryName}</p>
        <Link
          to={`/books/${categoryName}`}
          className="duration-300 bg-primary-color text-white py-2 px-4  rounded-md inline-block mt-4   text-lg hover:bg-black hover:text-white"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Category;
