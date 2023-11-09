import { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import CategorisedBook from "./CategorisedBook";

const CategorisedBooks = () => {
  const { categoryName } = useParams();
  // console.log(categoryName);
  const [categoryBook, setCategoryBook] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `/books/${categoryName}`;
  /* axiosSecure
    .get(url)
    .then((res) => {
      setCategories(res.data);
    })
    .catch((error) => {
      console.log(error);
    }); */

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
      setCategoryBook(data);
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
    <div>
      <div className="max-w-6xl mx-auto mt-12 mb-24">
        {categoryBook?.length > 0 ? (
          <div className="mx-4 lg:mx-0">
            <h2 className="mt-32 text-xl text-center md:text-3xl">
              All {categoryName} Related Books
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-10">
              {categoryBook.map((data) => (
                <CategorisedBook key={data._id} data={data}></CategorisedBook>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center  lg:text-2xl text-black mx-2 lg:mx-0">
            <span className="font-semibold">{categoryName}</span> does not have
            a available Books now...
          </p>
        )}
      </div>
    </div>
  );
};

export default CategorisedBooks;
