import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./SwiperSlider.css";

const SwiperSlider = () => {
  return (
    <div className="my-20">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper swiper-bg "
      >
        <div className="overlay"></div>

        <SwiperSlide className="relative">
          {" "}
          <div className="text text-white text-xs lg:text-base w-full lg:max-w-3xl">
            <p className="text-center">
              Discover pure exhilaration with our latest model, redefining
              luxury and power at CarVista. Elevate your journey with
              cutting-edge technology, unmatched performance, and timeless
              elegance. Experience driving perfection today.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="text text-white text-xs lg:text-base w-full lg:max-w-3xl">
            <p className="text-center">
              exhilaration with our latest model, redefining luxury and power at
              CarVista. Elevate your journey with cutting-edge technology,
              unmatched performance, and timeless elegance. Experience driving
              perfection today.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
