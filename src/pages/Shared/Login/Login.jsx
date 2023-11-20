import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/img/login.webp";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthProvider";
import loginGif from "../../../assets/img/login.gif";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // signInUser
    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        form.reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Logged-in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  // google signin
  const hanldeGoogleSignIn = () => {
    console.log("google");
    signInWithGoogle()
      .then((result) => {
        console.log("google signin", result.user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Logged-in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="mt-16 md:mt-32 -mb-2">
      <div className="hero-content max-w-6xl mx-auto text-center grid gap-y-12 md:grid-cols-4">
        <div className="h-full col-span-2">
          <img src={loginGif} className="h-full" />
        </div>
        <div className="h-full col-span-2">
          {" "}
          <form
            onSubmit={handleLogin}
            className="card-body -mt-6 lg:-mt-0   bg-white  px-2 md:px-6 shadow-lg border border-primary-color rounded-md"
          >
            <p className="text-black text-2xl md:text-3xl font-semibold">
              Please Login
            </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary-color text-base md:text-lg">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-transparent border-b-2 border-b-[#302f2f4f] p-2 outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary-color text-base md:text-lg">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="bg-transparent border-b-2 outline-none border-b-[#302f2f4f] p-2"
                required
              />
            </div>
            {error ? <p className="text-red-600  bg-white p-1">{error}</p> : ""}
            <div className="form-control mt-6">
              <button className="btn bg-transparent border-primary-color duration-300 text-primary-color hover:border-black hover:bg-transparent  hover:text-primary-color text-lg md:text-xl capitalize font-semibold">
                Login
              </button>
            </div>

            <p className="text-lg text-black my-4">Or Login with</p>
            <button
              onClick={hanldeGoogleSignIn}
              className="btn bg-transparent border-primary-color duration-300 text-primary-color hover:border-primary-color hover:bg-transparent  hover:text-black text-lg capitalize font-semibold"
            >
              <FcGoogle />
              <span className="text-xl">Google</span>
            </button>
            <p className="text-black text-left whitespace-nowrap text-sm md:text-base mt-4">
              New to this website? Please{" "}
              <Link to="/register" className="link link-primary">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
