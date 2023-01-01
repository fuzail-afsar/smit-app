import variables from "assets/scss/_variables.scss";

const ThemeConfig = () => {
  return {
    palette: {
      primary: {
        main: variables.primaryColor,
      },
      secondary: {
        main: variables.secondaryColor,
      },
    },
    typography: {
      fontFamily: variables.font,
      h1: {
        fontWeight: 700,
      },
    },
  };
};

export default ThemeConfig;
