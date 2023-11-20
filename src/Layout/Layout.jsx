import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const from = location.pathname;
  // console.log(from);
  return (
    <div
      className={from !== "/login" && from !== "/register" && "dark:bg-black"}
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
