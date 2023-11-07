import { Link } from "react-router-dom";
import img from "../../../assets/img/login.webp";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };
  return (
    <div className="mt-16 md:mt-32 -mb-10">
      <div className="hero-content max-w-6xl mx-auto text-center grid md:grid-cols-4">
        <div className="h-full col-span-2">
          <img src={img} className="h-full" />
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

            <div className="form-control mt-6">
              <button className="btn bg-transparent border-primary-color duration-300 text-primary-color hover:border-black hover:bg-transparent  hover:text-primary-color text-lg md:text-xl capitalize font-semibold">
                Login
              </button>
            </div>

            <p className="text-lg text-black my-4">Or Login with</p>
            <button className="btn bg-transparent border-primary-color duration-300 text-primary-color hover:border-primary-color hover:bg-transparent  hover:text-black text-lg capitalize font-semibold">
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
