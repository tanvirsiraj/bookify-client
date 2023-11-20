import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {
  return (
    <div className="dark:bg-black">
      <Banner></Banner>
      <Categories></Categories>
      <AboutUs></AboutUs>
      <FeedBack></FeedBack>
    </div>
  );
};

export default Home;
