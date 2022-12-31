import { Box, Button, BoxProps, ButtonProps } from "@mui/material";

type NavButtonProps = {
  navProps?: BoxProps;
  buttonsProps?: ButtonProps;
  navItems: string[];
};
const NavButton: React.FC<NavButtonProps> = ({
  navProps,
  buttonsProps,
  navItems,
}) => {
  return (
    <Box {...navProps}>
      {navItems.map((item, index) => (
        <Button key={item + index} {...buttonsProps}>
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default NavButton;
