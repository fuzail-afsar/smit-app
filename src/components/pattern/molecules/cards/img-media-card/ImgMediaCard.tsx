import { Card, CardContent, CardMedia } from "@mui/material";
import TitleDescription from "../../title-description/TitleDescription";

export type ImgMediaCardProps = {
  imagePath: string;
  title: string;
  description: string;
};
const ImgMediaCard: React.FC<ImgMediaCardProps> = ({
  imagePath,
  title,
  description,
}) => {
  return (
    <Card>
      <CardMedia component="img" height={140} image={imagePath} alt={title} />
      <CardContent>
        <TitleDescription
          titleProps={{
            variant: "h5",
            gutterBottom: true,
            children: title,
            color: "secondary",
          }}
          descriptionProps={{
            variant: "body2",
            color: "text.secondary",
            children: description,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default ImgMediaCard;
