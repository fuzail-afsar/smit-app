import { Box, Container, Typography } from "@mui/material";
import ImgMediaCardGrid, {
  ImgMediaCardGridProps,
} from "components/pattern/molecules/grid/ImgMediaCardGrid";

type NewCoursesProps = ImgMediaCardGridProps & { sectionTitle: string };

const NewCourses: React.FC<NewCoursesProps> = ({ sectionTitle, items }) => {
  return (
    <Box component="section" py={5}>
      <Container>
        <Typography
          align="center"
          component="h2"
          variant="h3"
          fontWeight="600"
          gutterBottom
        >
          {sectionTitle}
        </Typography>
        <ImgMediaCardGrid items={items} />
      </Container>
    </Box>
  );
};

export default NewCourses;
