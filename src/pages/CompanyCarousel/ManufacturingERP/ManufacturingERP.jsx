import React from "react";
import "./ManufacturingERP.css"
import CompanyCarousel from "../Carousel1/CompanyCarousel";
import { Grid } from "@mui/material";
import CompanyCarousel2 from "../Carousel2/CompanyCarousel2";
import CompanyCarousel3 from "../Carousel3/CompanyCarousel3";

const ManufacturingERP = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      marginTop="30px"
    >
      {/* Heading */}
      <Grid item xs={12} className="carouse-heading-container">
        <span className="carouselheading">
          Our Key Clients for{" "}
          <span className="carouseltitle">Manufacturing ERP</span>
        </span>
      </Grid>

      {/* Subheading */}
      <Grid item xs={12} className="carouseldesc">
        Trusted by the Best in the Industry
      </Grid>
      <CompanyCarousel/>
      <CompanyCarousel2/>
      <CompanyCarousel3/>
    </Grid>
  );
};

export default ManufacturingERP;
