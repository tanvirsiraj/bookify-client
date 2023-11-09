import { Rating } from "@smastrom/react-rating";
import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";

const BookDetails = () => {
  const data = useLoaderData();
  const [currentQuantity, setCurrentQuantity] = useState(data.quantity || 0);
  const { user } = useContext(AuthContext);
  //   console.log(data);
  const {
    _id,
    img,
    name,
    quantity,
    authorName,
    description,
    rating,
    category,
  } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const returnDate = form.returnDate.value;
    const borrowDate = form.borrowDate.value;
    console.log(borrowDate, returnDate);
    const userName = user.displayName;
    const email = user.email;
    console.log(name, email);
    const borrowedBooks = {
      id: _id,
      img,
      name,
      category,
      userName,
      email,
      borrowDate,
      returnDate,
    };

    if (returnDate && borrowDate) {
      const myModal = document.getElementById("my_modal_1");
      if (myModal) {
        myModal.close();
      }

      const qty = parseInt(quantity) - 1;

      // update book quantity

      axios
        .put(`http://localhost:5000/updateQuantity/${_id}`, { qty })
        .then((res) => {
          console.log(res);
          setCurrentQuantity(qty);
        })
        .catch((error) => {
          console.log(error);
        });

      // added to borrowed Books

      const url = `http://localhost:5000/borrowedBooks`;
      axios
        .post(url, borrowedBooks)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-32">
      <div className="mx-2 lg:mx-0 py-4 bg-white shadow-md border rounded-md relative    md:grid md:grid-cols-5 gap-4 md:items-center  px-2 ">
        <div className="flex gap-4 col-span-2 items-center ">
          <div className="">
            <img className="w-full h-60" src={img} alt="book" />
          </div>

          <div className="">
            <h2 className="text-black text-base font-semibold ">{name}</h2>
            <p className="text-primary-color text-sm ">By {authorName}</p>
            <p className="   text-gray-600  text-xs ">{category}</p>

            <Rating
              className="mt-2 "
              style={{ maxWidth: 80 }}
              value={rating}
              readOnly
            />
            <p className="mt-1 text-sm">Qty: {currentQuantity}</p>
            <div className="card-actions  mt-6">
              <Link
                to={`/readBooks/${_id}`}
                className=" bg-black text-white py-1 px-3 rounded  duration-300 hover:bg-primary-color capitalize"
              >
                Read
              </Link>

              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="bg-primary-color text-white py-1 px-3 rounded  duration-300 hover:bg-black capitalize"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Borrow
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <div className="text-center">
                    <form onSubmit={handleSubmit}>
                      <div className="flex justify-between">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-primary-color text-base md:text-lg">
                              Borrow Date
                            </span>
                          </label>
                          <input
                            type="date"
                            name="borrowDate"
                            className="bg-transparent border-b-2 border-b-[#302f2f4f] p-2 outline-none"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-primary-color text-base md:text-lg">
                              Return Date
                            </span>
                          </label>
                          <input
                            type="date"
                            name="returnDate"
                            className="bg-transparent border-b-2 border-b-[#302f2f4f] p-2 outline-none"
                            required
                          />
                        </div>
                      </div>
                      <div className="mt-8">
                        <button
                          type="submit"
                          className="bg-primary-color text-white py-1 px-3 rounded   duration-300 hover:bg-black capitalize"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </dialog>
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
