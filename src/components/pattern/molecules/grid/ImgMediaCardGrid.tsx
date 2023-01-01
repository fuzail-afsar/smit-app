import { Grid } from "@mui/material";
import ImgMediaCard, {
  ImgMediaCardProps,
} from "../cards/img-media-card/ImgMediaCard";

export type ImgMediaCardGridProps = {
  items: ImgMediaCardProps[];
};
const ImgMediaCardGrid: React.FC<ImgMediaCardGridProps> = ({ items }) => {
  return (
    <Grid container spacing={2} justifyContent="space-between">
      {items.map((item, index) => (
        <Grid item xs={12} sm={4} md={3} key={item.title + index}>
          <ImgMediaCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImgMediaCardGrid;
