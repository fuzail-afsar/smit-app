import { Typography, TypographyProps } from "@mui/material";

export type TitleDescriptionProps = {
  titleProps: TypographyProps;
  descriptionProps: TypographyProps;
};

const TitleDescription: React.FC<TitleDescriptionProps> = ({
  titleProps,
  descriptionProps,
}) => {
  return (
    <>
      <Typography {...titleProps} />
      <Typography {...descriptionProps} />
    </>
  );
};

export default TitleDescription;
