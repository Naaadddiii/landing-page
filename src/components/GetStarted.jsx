import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
// img
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  const commonImageStyles = {
    width: "100%",
    height: "auto", // Maintain the aspect ratio
    maxHeight: "300px", // You can adjust this value based on your design
    objectFit: "cover", // Ensure consistent cropping of images if needed
  };

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"We Simplify IoT Integration"} textAlign={"start"} />
          <CustomTypography>
            Our solutions are constantly evolving, ensuring you never miss out
            on the latest IoT innovations.
            <br />
            Whether it's smart home automation or industry-specific IoT
            applications,
            <br />
            we'll help you find the perfect fit.
          </CustomTypography>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img src={image1} alt="IoT solution 1" style={commonImageStyles} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img src={image2} alt="IoT solution 2" style={commonImageStyles} />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title
            text={"Connect with Expert IoT Consultants"}
            textAlign={"start"}
          />
          <CustomTypography>
            Our trusted consultants are industry experts, offering personalized
            guidance with an average customer satisfaction rating of 4.8/5
            stars.
            <br />
            Let them help you find the best IoT solutions for your needs.
          </CustomTypography>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default GetStarted;
