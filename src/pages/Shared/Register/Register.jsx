import { Link } from "react-router-dom";
import img from "../../../assets/img/register.png";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div className="mt-16 md:mt-32 -mb-10">
      <div className="hero-content max-w-6xl mx-auto text-center grid md:grid-cols-4">
        <div className="h-full col-span-2 ">
          <img src={img} className="h-full" />
        </div>
        <div className="h-full col-span-2">
          {" "}
          <form
            onSubmit={handleRegister}
            className="card-body -mt-6 lg:-mt-0   bg-white  px-2 md:px-6 shadow-lg border border-primary-color rounded-md"
          >
            <p className="text-black text-2xl md:text-3xl font-semibold">
              Please Register
            </p>
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
