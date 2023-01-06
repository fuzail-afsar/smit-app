import variables from "../scss/_variables.scss";
import { LinkProps } from "@mui/material/Link";
import LinkBehavior from "./overrides/LinkBehavior";

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
    // typography: {
    //   fontFamily: variables.font,
    //   h1: {
    //     fontWeight: 700,
    //   },
    // },
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 600,
          },
        },
      },
    },
  };
};

export default ThemeConfig;
