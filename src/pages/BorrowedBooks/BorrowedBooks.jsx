import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import BorrowedBook from "./BorrowedBook";
import gif2 from "../../assets/img/gif2.gif";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const { user } = useContext(AuthContext);

  const url = `https://bookify-server-xi.vercel.app/borrowedBooks?email=${user.email}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setBorrowedBooks(res.data);
    });
  }, [url]);

  return (
    <div>
      <div className="max-w-6xl mx-auto mt-32">
        <div className="mx-4 lg:mx-0">
          {borrowedBooks?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 ">
              {borrowedBooks.map((book) => (
                <BorrowedBook
                  key={book._id}
                  book={book}
                  setBorrowedBooks={setBorrowedBooks}
                  borrowedBooks={borrowedBooks}
                ></BorrowedBook>
              ))}
            </div>
          ) : (
            <div className="text-center md:flex justify-center items-center">
              <h2 className=" md:my-24 font-semibold">
                You have not borrowed any book yet{" "}
              </h2>
              <div className="flex justify-center">
                <img src={gif2} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooks;
