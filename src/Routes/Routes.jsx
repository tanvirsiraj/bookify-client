import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home/Home";
import AddBook from "../pages/AddBook/AddBook";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CategorisedBooks from "../pages/CategorisedBooks/CategorisedBooks";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadBooks from "../pages/ReadBooks/ReadBooks";
import UpdateBook from "../pages/UpdateBook/UpdateBook";
import NotFound from "../NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowedBooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/books/:categoryName",
        element: <CategorisedBooks></CategorisedBooks>,
      },
      {
        path: "/bookDetails/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookDetails/${params.id}`),
      },
      {
        path: "/readBooks/:id",
        element: (
          <PrivateRoute>
            <ReadBooks></ReadBooks>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookDetails/${params.id}`),
      },
      {
        path: "/updateBook/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateBook/${params.id}`),
      },
    ],
  },
]);

export default router;
