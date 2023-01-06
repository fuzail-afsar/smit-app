import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import "./style.scss";

type SwiperImageSliderProps = {
  images: string[];
};

const SwiperImageSlider: React.FC<SwiperImageSliderProps> = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="image-slider"
    >
      {images.map((image, index) => (
        <SwiperSlide key={image + index}>
          <img src={image} alt={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImageSlider;
