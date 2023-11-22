import { Rating } from "@smastrom/react-rating";
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

import Swal from "sweetalert2";
import axios from "axios";
import gif1 from "../../assets/img/gif1.gif";
import "./BookDetails.css";

const BookDetails = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const [minDate, setMinDate] = useState(tomorrow.toISOString().split("T")[0]);

  const data = useLoaderData();
  // console.log(data);
  const [currentQuantity, setCurrentQuantity] = useState(data.quantity || 0);
  console.log(currentQuantity);

  const [borrowedBook, setBorrowedBook] = useState({});
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/borrowedBook?email=${user.email}&id=${data._id}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setBorrowedBook(res.data);
    });
  }, [url]);
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

  const handleBorrowClick = () => {
    if (borrowedBook) {
      document.getElementById("my_modal_2").showModal();
    } else {
      document.getElementById("my_modal_1").showModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const returnDate = form.returnDate.value;
    const borrowDate = form.borrowDate.value;
    // console.log(borrowDate, returnDate);
    const userName = user.displayName;
    const email = user.email;
    console.log(name, email);
    const borrowedBooks = {
      id: _id,
      img,
      name,
      authorName,
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
      const url = `http://localhost:5000/updateQuantity/${_id}`;
      axios
        .put(url, { qty })
        .then((res) => {
          console.log(res);
          setCurrentQuantity(qty);
        })
        .catch((error) => {
          console.log(error);
        });

      // added to borrowed Books

      const urlSecond = "http://localhost:5000/borrowedBooks";
      axios
        .post(urlSecond, borrowedBooks)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "You have borrowed the book successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            setBorrowedBook(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div
      className="max-w-6xl mx-auto pt-32"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="mx-2 lg:mx-0 py-4 bg-white shadow-md border rounded-md relative    md:grid md:grid-cols-5 gap-4 md:items-center  px-2 ">
        <div className="flex gap-4 col-span-2 items-center ">
          <div className="">
            <img className="w-full h-60" src={img} alt="book" />
          </div>

          <div className="">
            <h2 className="text-black text-base font-semibold ">{name}</h2>
            <p className="text-primary-color text-sm ">By {authorName}</p>
            <p className="   text-gray-600  text-xs ">{category}</p>

            <div className="flex gap-1">
              <Rating
                className="mt-2"
                style={{ maxWidth: 80 }}
                value={rating}
                readOnly
              />

              <p className="text-black text-sm mt-3">{rating}</p>
            </div>
            <p className="mt-1 text-sm text-black">Qty: {currentQuantity}</p>
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
                onClick={handleBorrowClick}
                disabled={currentQuantity === 0}
              >
                Borrow
              </button>

              <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white ">
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
                            className="bg-transparent border-b-2 border-b-[#302f2f4f] p-2 outline-none text-black "
                            required
                            min={new Date().toISOString().split("T")[0]} // Set the minimum date to today
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
                            className="bg-transparent border-b-2 border-b-[#302f2f4f] p-2 outline-none text-black "
                            required
                            min={minDate}
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

              <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-white">
                  <p className="pt-4 mb-2 text-primary-color text-center text-lg ">
                    I know You have already borrowed this book.
                  </p>
                  <div className="flex justify-center">
                    {" "}
                    <img className="w-32 h-32" src={gif1} />
                  </div>
                  <div className="modal-action justify-center">
                    <form method="dialog" className="text-center">
                      <button className="bg-primary-color text-white py-1 px-3 rounded   duration-300 hover:bg-black capitalize ">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
        <div className=" col-span-3 mt-4 md:mt-0 text-sm md:text-base">
          <span className="font-semibold text-black">Overview:</span>
          <p className="text-black">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
