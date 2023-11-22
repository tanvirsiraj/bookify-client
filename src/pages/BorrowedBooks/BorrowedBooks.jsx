import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import BorrowedBook from "./BorrowedBook";
import gif2 from "../../assets/img/gif2.gif";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BorrowedBooks = () => {
  const axiosSecure = useAxiosSecure();
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const { user } = useContext(AuthContext);

  const url = `/borrowedBooks?email=${user.email}`;

  const { isPending, error, data } = useQuery({
    queryKey: ["borrwedBooks"],
    queryFn: () =>
      axiosSecure.get(url).then((res) => {
        return res.data;
      }),
  });
  useEffect(() => {
    if (data) {
      setBorrowedBooks(data);
    }
  }, [data]);

  if (isPending)
    return (
      <div className="max-w-6xl mx-auto my-44 flex justify-center">
        <span className="loading  loading-spinner loading-lg text-primary-color"></span>
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="dark:bg-black">
      <div className="max-w-6xl mx-auto pt-32">
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
              <h2 className=" md:my-24 font-semibold text-black dark:text-white">
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
