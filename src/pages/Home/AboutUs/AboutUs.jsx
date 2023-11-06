import banner2 from "../../../assets/img/banner2.jpg";

const AboutUs = () => {
  return (
    <div className="mx-2 lg:mx-0 my-10 lg:my-16">
      <div className=" max-w-6xl mx-auto bg-white">
        <div className="flex-col lg:flex justify-between items-center lg:flex-row-reverse gap-6 ">
          <div className="lg:w-1/2">
            <img src={banner2} className="h-auto" />
          </div>
          <div className="lg:w-1/2 mt-6">
            <h1 className="text-2xl lg:text-5xl font-semibold ">About Us</h1>
            <p className="py-4 text-sm lg:text-base">
              Bookify, a user-friendly online platform, serves as a haven for
              book enthusiasts seeking literary adventures. With its intuitive
              interface and comprehensive database, Bookify streamlines the
              process of discovering, purchasing, and exploring an extensive
              array of books, ranging from timeless classics to contemporary
              bestsellers.
              <br /> <br /> Bookify encourages a seamless and immersive reading
              experience. Emphasizing community engagement, Bookify facilitates
              meaningful interactions through book clubs, discussion forums, and
              author Q&A sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
