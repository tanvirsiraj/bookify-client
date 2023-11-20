import { Link, useNavigate } from "react-router-dom";
import img from "../../../assets/img/register.png";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import signupGif from "../../../assets/img/signup.gif";
import signup2Gif from "../../../assets/img/signup2.gif";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    if (password.length < 6) {
      setError("Password can not be less than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password doesn't have a capital letters");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      setError("Password doesn't have a special characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        profileUpdate(name, photoUrl)
          .then(() => {})
          .catch(() => {});
        form.reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Signed Up successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="mt-8 md:mt-32 lg:mt-4  md:-mb-8 ">
      <div className="hero-content max-w-6xl mx-auto text-center flex-col md:flex-row md:justify-between md:items-center ">
        <div className="h-full w-full overflow-hidden">
          <img src={signup2Gif} className="h-full " />
        </div>
        <div className="h-full w-full">
          {" "}
          <form
            onSubmit={handleRegister}
            className="card-body -mt-4 lg:-mt-0   bg-white  px-2 md:px-6 shadow-lg border border-primary-color rounded-md"
          >
            <p className="text-black text-2xl md:text-3xl font-semibold">
              Please Register
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-color text-base md:text-lg">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="bg-transparent border-b-2 border-b-[#302f2f4f] p-2 outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-color text-base md:text-lg">
                    Photo Url
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo"
                  className="bg-transparent border-b-2 border-b-[#302f2f4f] p-2 outline-none"
                  required
                />
              </div>
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
            </div>

            {error && (
              <p className="text-red-600 font-semibold bg-white p-1">{error}</p>
            )}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-transparent border-primary-color duration-300 text-primary-color hover:border-black hover:bg-transparent  text-base md:text-xl capitalize font-semibold"
              >
                Register
              </button>
            </div>

            <p className="text-black text-left whitespace-nowrap text-xs md:text-base mt-4">
              Already have an account? Please{" "}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
