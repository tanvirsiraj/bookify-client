import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import SingleBook from "./SingleBook";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `/allbooks`;

  const { isPending, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      axiosSecure.get(url).then((res) => {
        return res.data;
      }),
  });
  useEffect(() => {
    /*   const fetchData = async () => {
      setIsLoading(true)
      try {
///API
      } catch (error) {
        ///ERROR
      } finally {
        setIsLoading(false)
      } */

    if (data) {
      setBooks(data);
    }
  }, [data]);

  if (isPending)
    return (
      <div className="max-w-6xl mx-auto md:py-40 flex justify-center ">
        <span className="loading  loading-spinner loading-lg text-primary-color dark:text-white"></span>
      </div>
    );

  if (error)
    return (
      <p className="text-center my-4">An error has occurred: {error.message}</p>
    );

  return (
    <div className="dark:bg-black">
      <div className="max-w-6xl mx-auto pt-32">
        <div className="mx-4 lg:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 ">
            {books.map((book) => (
              <SingleBook key={book._id} book={book}></SingleBook>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
