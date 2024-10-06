import { Paper, Stack, Button, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import menuConfigs from "../../configs/menu.configs";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  return (
    <Container>
      <Paper
        square={true}
        sx={{ backgroundImage: "unset", padding: "2rem", position: "relative" }}
      >
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row " }}
          sx={{ height: "max-content" }}
        >
          <Logo />
          <Box>
            {menuConfigs.main.map((item, index) => (
              <Button
                key={index}
                sx={{ color: "inherit" }}
                component={Link}
                to={item.path}
              >
                {item.display}
              </Button>
            ))}
          </Box>
        </Stack>
        <Typography
          variant="body2"
          align="center"
          sx={{
            position: "absolute",
            bottom: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            color: "gray",
          }}
        >
          &copy; 2024 CineFlix Developed by{" "}
          <a
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
            href="https://github.com/rohitshimpi737"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rohit Shimpi
          </a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Footer;
