import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero relative w-full  min-h-screen  ">
      <div className="overlay"></div>
      <div className="bg-img"></div>
      <div className="hero-content  text-center text-neutral-content relative z-20">
        <div
          className="max-w-xl mt-10 md:mt-4"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <h1 className="mb-5 text-1xl md:text-4xl lg:text-5xl textw font-bold text-white">
            Welcome <br /> To <br />
            Bookify Library
          </h1>
          <p className="mb-5 text-sm md:text-base text-white">
            Welcome to Bookify Library, your gateway to a world of knowledge,
            where every page is an adventure waiting to be explored.
          </p>
          <button className="btn bg-primary-color border-none text-white hover:bg-white hover:text-primary-color ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
