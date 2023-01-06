import SwiperImageSlider from "../organisms/sliders/swiper/image/SwiperImageSlider";
import { Box, Container, Typography } from "@mui/material";
import ImageMediaCardGrid, {
  ImageMediaCardGridProps,
} from "../organisms/grid/card/media/image/ImageMediaCardGrid";

type FrontTemplateProps = {
  banner: {
    images: string[];
  };
  courses: {
    title: string;
  } & ImageMediaCardGridProps;
};
const FrontTemplate: React.FC<FrontTemplateProps> = ({
  banner,
  courses: { title, items },
}) => {
  return (
    <>
      <section>
        <SwiperImageSlider images={banner.images} />
      </section>
      <Box component="section" py={5}>
        <Container>
          <Typography
            align="center"
            component="h2"
            variant="h3"
            fontWeight="600"
            gutterBottom
          >
            {title}
          </Typography>
          <ImageMediaCardGrid items={items} />
        </Container>
      </Box>
    </>
  );
};

export default FrontTemplate;
