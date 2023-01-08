import SwiperImageSlider from "../organisms/sliders/swiper/image/SwiperImageSlider";
import { Box, Container, Typography } from "@mui/material";
import ImageMediaCardGrid, {
  ImageMediaCardGridProps,
} from "../organisms/grid/card/media/image/ImageMediaCardGrid";
import RegistrationForm, {
  RegistrationFormProps,
} from "../organisms/form/RegistrationForm";

type FrontTemplateProps = {
  banner: {
    images: string[];
  };
  courses: {
    title: string;
  } & ImageMediaCardGridProps;
  registration: {
    title: string;
  } & RegistrationFormProps;
};
const FrontTemplate: React.FC<FrontTemplateProps> = ({
  banner,
  courses: { title: courseTitle, items },
  registration: { title: registrationTitle, onSubmit },
}) => {
  return (
    <>
      <section>
        <SwiperImageSlider images={banner.images} />
      </section>
      <Box component="section" py={6}>
        <Container>
          <Typography
            align="center"
            component="h2"
            variant="h3"
            fontWeight="600"
            gutterBottom
          >
            {courseTitle}
          </Typography>
          <ImageMediaCardGrid items={items} />
        </Container>
      </Box>
      <Box component="section" py={6}>
        <Container>
          <Typography
            align="center"
            component="h2"
            variant="h3"
            fontWeight="600"
            gutterBottom
          >
            {registrationTitle}
          </Typography>
          <RegistrationForm onSubmit={onSubmit} />
        </Container>
      </Box>
    </>
  );
};

export default FrontTemplate;
