import React from "react";
import img1 from "../../assets/images/mac-screen-min.png";
import { Button, colors, Grid } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import erpdia from "../../assets/images/production.png";
import featureimg1 from "../../assets/images/vintex-logo.png";
import featureimg2 from "../../assets/images/kjs-logo.png"
import featureimg3 from "../../assets/images/zb-footwear-logo.png"
import "./WhyERP.css";
const WhyERP = () => {
  return (
    <>
      <Grid container className="whyerp">
        <Grid item xs={12} sm={12} md={6} className="imgdiv">
          <img src={img1}></img>
        </Grid>
        <Grid item sm={12} md={6}>
          <Grid item xs={12} className="whyerp-container">
            <span className="whyerpheading">
              Why <span className="whyerptitle">Absolute™ ERP?</span>
            </span>

            <div style={{ marginTop: "10px" }}>
              <div className="icondesc">
                <CheckCircleOutlineIcon
                  sx={{
                    color: "#e7880c",
                    marginTop: "7px",
                    fontSize: "22px",
                    fontSize: "22px",
                  }}
                />
                <span>One system to meet all requirements</span>
              </div>
              <div className="icondesc">
                <CheckCircleOutlineIcon
                  sx={{ color: "#e7880c", marginTop: "7px", fontSize: "22px" }}
                />
                <span>Real-Time Tracking</span>
              </div>
              <div className="icondesc">
                <CheckCircleOutlineIcon
                  sx={{ color: "#e7880c", marginTop: "7px", fontSize: "22px" }}
                />
                <span>Boosts Productivity</span>
              </div>
              <div className="icondesc">
                <CheckCircleOutlineIcon
                  sx={{ color: "#e7880c", marginTop: "7px", fontSize: "22px" }}
                />
                <span>Adds to Your Bottom Line</span>
              </div>
              <div className="icondesc">
                <CheckCircleOutlineIcon
                  sx={{ color: "#e7880c", marginTop: "7px", fontSize: "22px" }}
                />
                <span>Helps Your Business Grow</span>
              </div>
              <div className="icondesc">
                <CheckCircleOutlineIcon
                  sx={{ color: "#e7880c", marginTop: "7px", fontSize: "22px" }}
                />
                <span>Customers are More Satisfied as a Result</span>
              </div>
              <div className="icondesc">
                <CheckCircleOutlineIcon
                  sx={{ color: "#e7880c", marginTop: "7px", fontSize: "22px" }}
                />
                <span>Automated Manufacturing ERP</span>
              </div>
            </div>
            <Button className="busindemobtn" variant="contained">
              FREE DEMO
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <div className="erpwhy-container">
        <Grid container>
          <Grid item xs={12} md={7.5} className="erp-heading-container">
            <span className="erpheading">
              Why <span className="erptitle">Manufacturing ERP Software?</span>
            </span>
            <br></br>
            <span>
              Manufacturing ERP Software are useful for the organisations in
              many was as it make simple and decision making to the Top
              Management by using the data from Smart Dashboards and centralized
              data.
            </span>
            <h4 style={{ marginTop: "10px" }}>
              Manufacturing ERP Software is helpful as :
            </h4>
            <div style={{ marginTop: "-20px" }}>
              <div className="icondesc">
                <CheckCircleOutlineIcon
                  sx={{
                    color: "#e7880c",
                    marginTop: "7px",
                    fontSize: "22px",
                    fontSize: "22px",
                  }}
                />
                <span>
                  Manufacturing ERP Software make the system robust and
                  standardized
                </span>
              </div>
              <div className="icondesc">
                <CheckCircleOutlineIcon
                  sx={{
                    color: "#e7880c",
                    marginTop: "7px",
                    fontSize: "22px",
                    fontSize: "22px",
                  }}
                />
                <span>
                  Manufacturing ERP System increase the production efficiency as
                  most of the Manufacturing ERP have automated BOM & Production
                  Planning
                </span>
              </div>
              <div className="icondesc">
                <CheckCircleOutlineIcon
                  sx={{
                    color: "#e7880c",
                    marginTop: "7px",
                    fontSize: "22px",
                    fontSize: "22px",
                  }}
                />
                <span>
                  {" "}
                  Manufacturing ERP is helpful for Vendor Selection, Keep Proper
                  Inventory level, Historical data in most presentable manner
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src={erpdia}
              style={{ width: "90%", marginLeft: "40px", marginBottom: "20px" }}
            ></img>
          </Grid>
        </Grid>
      </div>
      {/* feature case study  */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Heading Section */}
        <Grid
          item
          xs={12}
          className="erp-heading-container"
          style={{ marginTop: "40px" }}
        >
          <span className="erpheading">
            Featured <span className="erptitle">Case Studies</span>
          </span>
        </Grid>

        {/* Description Section */}
        <Grid item xs={12}>
          <div className="erpdesc1" style={{ textAlign: "center" }}>
            Discover how Absolute ERP helped the world's leading brands.
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "2%", justifyContent: "center" }}
      >
        {/* First Grid Item */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3.5}
          className="contentdiv"
        >
          <div className="imgbg">
            <img
              src={featureimg1}
              alt="Vintex Rubber Roller"
              style={{ height: "150px"}}
            />
          </div>
          <div className="textimg">
            <span >Vintex, Rubber Roller Manufacturer</span>
          </div>
          <div className="detaildesc">
            As a result, the Vintex team sees excessive waste of pipes piling up
            in the inventory.
          </div>
        </Grid>

        {/* Second Grid Item */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3.5}
         className="contentdiv"
        >
          <div>
            <div className="imgbg">
              <img
                src={featureimg2}
                alt="Vintex Rubber Roller"
                style={{ height: "150px" }}
              />
            </div>
            <div  className="textimg">
              <span>
              KJS Concrete, Concrete Products Manufacturer
              </span>
            </div>
            <div className="detaildesc">
            As a result, the KJS team was able to reduce labor costs and automated the entire production process
            </div>
          </div>
        </Grid>

        {/* Third Grid Item */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3.5}
           className="contentdiv"
        >
          <div className="imgbg">
            <img
              src={featureimg3}
              alt="Vintex Rubber Roller"
              style={{ height: "150px"}}
            />
          </div>
          <div  className="textimg">
            <span >Z.B. Footwear, Manufacturer of Leather Footwear</span>
          </div>
          <div className="detaildesc">
          As a result, the Z.B. Footwear team, sees excessive challenges in their production & Inventory
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default WhyERP;
