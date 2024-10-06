import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light",
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette =
      mode === themeModes.dark
        ? {

          
            // primary: {
            //   main: "#ff0000",
            //   contrastText: "#ffffff"
            // },
            // secondary: {
            //   main: "#f44336",
            //   contrastText: "#ffffff"
            // },
            // background: {
            //   default: "#000000",
            //   paper: "#131313"
            // }

            primary: {
              main: "#009688", // Teal
              contrastText: "#ffffff", // White text
            },
            secondary: {
              main: "#FF6F61", // Coral
              contrastText: "#ffffff",
            },
            background: {
              default: "#212121", // Dark background
              paper: "#424242", // Dark paper background
            },
            text: {
              primary: "#ffffff", // White text on dark mode
            },
          }
        : {
            // primary: {
            //   main: "#ff0000"
            // },
            // secondary: {
            //   main: "#f44336"
            // },
            // background: {
            //   default: colors.grey["100"],
            // }

            primary: {
              main: "#009688", // Teal
              contrastText: "#2C3E50", // Dark slate gray text
            },
            secondary: {
              main: "#FF6F61", // Coral
            },
            background: {
              default: "#F0F0F0", // Light grey
              paper: "#FFFFFF", // White paper background
            },
            text: {
              primary: "#2C3E50", // Dark slate gray text
            },
          };

    return createTheme({
      palette: {
        mode,
        ...customPalette,
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true },
        },
      },
    });
  },
};

export default themeConfigs;

// The themeConfigs object contains the themeModes object and a custom function that returns a Material-UI theme based on the mode (dark or light).
// The themeModes object contains the dark and light properties with string values "dark" and "light", respectively.
// The custom function takes the mode as an argument and returns a Material-UI theme object with custom palette and component configurations based on the mode.
// The customPalette object contains different color configurations for the primary, secondary, background, and text colors based on the mode.
// The createTheme function is used to create a Material-UI theme with the specified palette and component configurations.
// The custom function returns the created theme object with the specified mode, palette, and component configurations.
