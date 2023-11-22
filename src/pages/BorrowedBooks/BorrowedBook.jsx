import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BorrowedBook = ({ book, setBorrowedBooks, borrowedBooks }) => {
  const { _id, id, img, category, authorName, name, returnDate, borrowDate } =
    book;
  const [data, setData] = useState({});
  console.log(id, _id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/returnedBook/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleUpdateQuantity = () => {
    // update book quantity
    const qty = parseInt(data.quantity) + 1;
    console.log(data.quantity, qty);

    axios
      .put(`http://localhost:5000/increaseQuantity/${id}`, {
        qty,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .delete(`http://localhost:5000/deleteBook/${_id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          Swal.fire("Returned!", "Thank you for returning the book.");
          const remainingBooks = borrowedBooks.filter(
            (singleBook) => singleBook._id != _id
          );
          setBorrowedBooks(remainingBooks);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      data-aos="flip-left"
      data-aos-duration="1500"
      className=" py-4 bg-white shadow-md border rounded-lg relative grid grid-cols-2 items-center gap-2   px-2"
    >
      <div className=" mx-auto  ">
        <img className="w-full h-60" src={img} alt="book" />
      </div>

      <div className="">
        <h2 className="text-black text-base font-semibold ">{name}</h2>
        <p className="text-primary-color text-sm">By {authorName}</p>
        <p className="   text-gray-600  text-xs ">{category}</p>
        <div className="mt-4">
          <p className="   text-gray-600  text-xs ">
            <span className="font-semibold">Borrowed Date:</span> {borrowDate}
          </p>
          <p className="   text-gray-600  text-xs ">
            {" "}
            <span className="font-semibold">Return Date:</span> {returnDate}
          </p>
        </div>

        <div className="card-actions  mt-6">
          <Link
            onClick={handleUpdateQuantity}
            className=" bg-primary-color text-white py-1 px-3 rounded  duration-300 hover:bg-black capitalize"
          >
            Return
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBook;
