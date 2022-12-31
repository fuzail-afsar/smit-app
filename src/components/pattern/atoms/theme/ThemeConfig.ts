import THEME_CONSTANTS from "assets/scss/_variables.scss";

const ThemeConfig = () => {
  return {
    palette: {
      // background: {
      //   default: THEME_CONSTANTS.bodyBackgroundColor,
      // },
      primary: {
        main: THEME_CONSTANTS.primaryColor,
      },
    },
    typography: {
      fontFamily: THEME_CONSTANTS.font,
      h1: {
        fontWeight: 700,
      },
    },
  };
};

export default ThemeConfig;
