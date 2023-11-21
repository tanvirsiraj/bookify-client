import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateBook = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  const axiosSecure = useAxiosSecure();

  const { _id, img, name, authorName, category, rating } = loaderData;

  const [selectedOption, setSelectedOption] = useState(category);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const name = form.bookName.value;
    const author = form.author.value;
    const rating = form.rating.value;

    const updatedBook = {
      img,
      name,
      author,
      rating,
      selectedOption,
    };

    const url = `updateBook/${_id}`;

    axiosSecure
      .put(url, updatedBook)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Book Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative">
      <div className="pt-32">
        <div className=" max-w-6xl mx-auto text-center ">
          <form
            onSubmit={handleUpdate}
            className="card-body bg-white shadow-lg border rounded   px-2 md:px-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-primary-color text-base md:text-lg">
                    Image
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={img}
                  name="img"
                  placeholder="photo url..."
                  className="bg-transparent border-b p-2 outline-none text-black"
                  required
                />
              </div>
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-primary-color text-base md:text-lg">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="bookName"
                  defaultValue={name}
                  placeholder="book name..."
                  className="bg-transparent border-b outline-none p-2 text-black"
                  required
                />
              </div>
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-primary-color text-base md:text-lg">
                    Author
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={authorName}
                  name="author"
                  placeholder="author name..."
                  className="bg-transparent border-b outline-none p-2 text-black"
                  required
                />
              </div>

              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-primary-color text-base md:text-lg">
                    Rating
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={rating}
                  name="rating"
                  placeholder="rating..."
                  className="bg-transparent border-b outline-none p-2 text-black"
                  required
                />
              </div>
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-primary-color text-base md:text-lg">
                    Category
                  </span>
                </label>
                <select
                  value={selectedOption}
                  className=" bg-transparent border-b outline-none p-2 w-full max-w-xs text-black"
                  onChange={handleOptionChange}
                >
                  <option>Business</option>
                  <option>Computers & Tech</option>
                  <option>Health & Fitness</option>
                  <option>Travel</option>
                  <option>Sports</option>
                  <option>Self-Help</option>
                </select>
              </div>
            </div>

            <div className="form-control mt-10 mx-auto ">
              <button
                type="submit"
                className="btn  bg-primary-color border-none duration-300 text-white  hover:bg-black  hover:text-white text-lg md:text-xl capitalize font-semibold add-btn"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
