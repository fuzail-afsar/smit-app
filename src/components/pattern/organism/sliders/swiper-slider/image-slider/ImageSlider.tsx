import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
import "./style.scss";

type ImageSliderProps = {
  images: string[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
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
          <img src={image} style={{ width: "100%" }} alt={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
