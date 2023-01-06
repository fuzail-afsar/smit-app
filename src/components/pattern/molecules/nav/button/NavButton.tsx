import { Box, Button, BoxProps, ButtonProps } from "@mui/material";

type NavButtonProps = {
  navProps?: BoxProps;
  buttonsProps: ButtonProps[];
};
const NavButton: React.FC<NavButtonProps> = ({ navProps, buttonsProps }) => {
  return (
    <Box {...{ component: "nav", ...navProps }}>
      {buttonsProps.map((buttonProps, index) => (
        <Button
          key={index}
          {...{
            ...buttonProps,
          }}
        />
      ))}
    </Box>
  );
};

export default NavButton;
