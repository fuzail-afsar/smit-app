import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        textAlign: "center",
      }}
      py={1}
    >
      Copyright © {new Date().getFullYear()} by Saylani Welfare Int Trust
    </Box>
  );
};
export default Footer;
