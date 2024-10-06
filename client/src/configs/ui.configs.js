const uiConfigs = {
  style: {
    gradientBgImage: {
      dark: {
        backgroundImage:
          "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
      },
      light: {
        backgroundImage:
          "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))",
      },
    },
    horizontalGradientBgImage: {
      dark: {
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
      },
      light: {
        backgroundImage:
          "linear-gradient(to right, rgba(245,245,245,1), rgba(0,0,0,0))",
      },
    },
    typoLines: (lines, textAlign) => ({
      textAlign: textAlign || "justify",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lines,
    }),
    mainContent: {
      maxWidth: "1366px",
      margin: "auto",
      padding: 2,
    },
    backgroundImage: (imgPath) => ({
      position: "relative",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "darkgrey",
      backgroundImage: `url(${imgPath})`,
    }),
  },
  size: {
    sidebarWith: "300px",
    contentMaxWidth: "1366px",
  },
};

export default uiConfigs;

// The uiConfigs object contains style and size properties. The style property contains the following properties:
// gradientBgImage: An object with dark and light properties that contain the CSS linear-gradient property for the background image.
// horizontalGradientBgImage: An object with dark and light properties that contain the CSS linear-gradient property for the horizontal background image.
// typoLines: A function that takes the number of lines and text alignment as arguments and returns an object with the CSS properties for text lines.
// mainContent: An object with CSS properties for the main content.
// backgroundImage: A function that takes an image path as an argument and returns an object with CSS properties for the background image.
// The size property contains the following properties:
// sidebarWith: The width of the sidebar.
// contentMaxWidth: The maximum width of the content.
// The uiConfigs object is exported as the default export of the file. It can be imported and used in other files to access the UI configuration settings.