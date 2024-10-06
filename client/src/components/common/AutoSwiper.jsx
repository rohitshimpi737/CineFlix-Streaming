
// This component is used to create a swiper with auto slides per view.
// It uses the Swiper component from the swiper/react library to create the swiper.
// The AutoSwiper component takes children as props, which are the slides to be displayed in the swiper.
// The component renders a Swiper component with slidesPerView set to "auto" to automatically adjust the number of slides displayed based on the container size.
// The component also sets the grabCursor property to true to display a grab cursor when hovering over the swiper.
// The component uses the Box component from the Material-UI library to style the swiper slides.
// The Box component sets the width of the swiper slides based on the screen size using responsive values.
// The AutoSwiper component is exported as the default export of the file and can be imported and used in other components to create auto slides per view swipers.


import { Box } from "@mui/material";
import { Swiper } from "swiper/react";



const AutoSwiper = ({ children }) => {
  return (
    <Box sx={{
      "& .swiper-slide": {
        width: {
          xs: "50%",
          sm: "35%",
          md: "25%",
          lg: "20.5%"
        }
      }
    }}>
      <Swiper
        slidesPerView="auto"
        grabCursor={true}
        style={{ width: "100%", height: "max-content" }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default AutoSwiper;

// The AutoSwiper component is a functional component that creates a swiper with auto slides per view. It uses the Swiper component from the swiper/react library to create the swiper.
