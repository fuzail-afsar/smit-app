import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ThemeConfig from "./ThemeConfig";

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={createTheme(ThemeConfig())}>
      <CssBaseline />
      {/* <GlobalStyle /> */}
      {children}
    </ThemeProvider>
  );
};

export default Theme;
