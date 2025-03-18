import React from "react";
import { Button, Grid } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CallIcon from "@mui/icons-material/Call";
import companylogo from "../../assets/images/companylogo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Grid container alignItems="center" className="navbar-container">
      {/* Mobile Section (Contact) */}
      <Grid
        container
        className="contactmob"
        style={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}
      >
        {/* Call Now Button */}
        <Grid
          item
          xs={6}
          className="contact"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#e99800",
          }}
        >
          <a
            href="tel:+917900340040"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <CallIcon style={{ fontSize: "18px" }} />
            <span>Call Now</span>
          </a>
        </Grid>

        {/* Placeholder for Another Element */}
        <Grid
          item
          xs={6}
          className="whtspmob"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "green",
          }}
        >
          <a
            href="https://web.whatsapp.com/send?phone=7900340040&text=Hi, I am interested in knowing more about Absolute ERP. Please share the details. My name is..."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              bottom: "20px",
              right: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <WhatsAppIcon
              style={{ fontSize: "18px", color: "white" }}
            ></WhatsAppIcon>
            <span style={{ color: "white", marginLeft: "5px" }}>WhatsApp</span>
          </a>
        </Grid>
      </Grid>

      {/* Logo Section */}
      <Grid item xs={6}>
        <img src={companylogo} className="complogo" alt="Company Logo" />
      </Grid>

      {/* Contact & Demo Button Section */}
      <Grid item xs={6} container justifyContent="flex-end" alignItems="center">
        <PhoneAndroidIcon className="phone-icon" />
        <span className="phone">+91 7900340040</span>
        <Button className="demobtn" variant="contained" color="primary">
          BOOK A DEMO
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
