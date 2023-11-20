import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddBook = () => {
  const axiosSecure = useAxiosSecure();

  const [selectedOption, setSelectedOption] = useState("Business");

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
    const description = form.description.value;
    const overview = form.overview.value;
    const quantity = parseInt(form.quantity.value);
    console.log(
      img,
      name,
      author,
      description,
      rating,
      overview,
      quantity,
      typeof quantity
    );

    const book = {
      img,
      name,
      authorName: author,
      rating,
      quantity,
      description,
      overview,
      category: selectedOption,
    };
    console.log(book);

    // sending new book to server
    const url = "/addBook";
    axiosSecure
      .post(url, book)
      .then((res) => {
        if (res.data.insertedId) {
          form.reset();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Book added successfully",
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
    <div className="relative dark:bg-black">
      <div className="pt-32">
        <div className=" max-w-6xl mx-auto text-center ">
          <form
            onSubmit={handleUpdate}
            className="card-body bg-white shadow-lg border rounded mx-2 lg:mx-0  px-2 md:px-6"
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
                  name="img"
                  placeholder="photo url..."
                  className="bg-transparent border-b p-2 outline-none"
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
                  placeholder="book name..."
                  className="bg-transparent border-b outline-none p-2"
                  required
                />
              </div>
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-primary-color text-base md:text-lg">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="quantity..."
                  className="bg-transparent border-b outline-none p-2"
                  required
                  min={0}
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
                  name="author"
                  placeholder="author name..."
                  className="bg-transparent border-b outline-none p-2"
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
                  name="rating"
                  placeholder="rating..."
                  className="bg-transparent border-b outline-none p-2"
                  required
                />
              </div>

              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-primary-color text-base md:text-lg">
                    Short Description
                  </span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="short description..."
                  className="bg-transparent border-b outline-none p-2"
                  required
                />
              </div>
              <div className="form-control overflow-hidden">
                <label className="label">
                  <span className="label-text text-primary-color text-base md:text-lg">
                    Overview
                  </span>
                </label>
                <input
                  type="text"
                  name="overview"
                  placeholder="overview..."
                  className="bg-transparent border-b outline-none p-2"
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
                  className=" bg-transparent border-b outline-none p-2 w-full max-w-xs "
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
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
