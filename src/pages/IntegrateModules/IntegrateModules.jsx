import { Button, Grid } from "@mui/material";
import React from "react";
import "./IntegrateModules.css";
import {
  PieChart as PieChartIcon,
  DescriptionOutlined as DescriptionIcon,
  SearchOutlined as SearchIcon,
  SpeedOutlined as SpeedIcon,
  HandshakeOutlined as HandshakeIcon,
  AttachMoneyOutlined as MoneyIcon,
  ShoppingCart as CartIcon,
  ViewInAr as ViewIcon,
} from "@mui/icons-material";
import steelimg from "../../assets/images/steel.png";
import pharmaimg from "../../assets/images/oral-drugs.png";
import garment from "../../assets/images/garments.png";
import plastic from "../../assets/images/plastic.png";
import cable from "../../assets/images/wire.png";
import concrete from "../../assets/images/concrete.png";
import leather from "../../assets/images/leather.png";
import footwear from "../../assets/images/footwear.png";
import automobile from "../../assets/images/automobile.png";
import electrical from "../../assets/images/electrical.png";
import fmcg from "../../assets/images/food.png";
import mining from "../../assets/images/mining.png";
import printing from "../../assets/images/printing.png";
import rubber from "../../assets/images/rubber.png";
import wood from "../../assets/images/wood.png";
import chemicals from "../../assets/images/chemical.png";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LockIcon from "@mui/icons-material/Lock";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import NfcIcon from "@mui/icons-material/Nfc";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
const modules = [
  {
    icon: <PieChartIcon className="img" />,
    title: "Planning & Production",
    features: [
      "Material Requirement Planning",
      "Master Production Scheduling",
      "Production Process Definition",
    ],
  },
  {
    icon: <DescriptionIcon className="img" />,
    title: "Production & Configuration",
    features: [
      "Bill Of Material",
      "Engineering Change Request",
      "Engineering Change Note",
    ],
  },
  {
    icon: <SearchIcon className="img" />,
    title: "Total Quality Management",
    features: [
      "Process Quality Check",
      "Finish Goods Quality Check",
      "Material Inward Quality Check",
    ],
  },
  {
    icon: <SpeedIcon className="img" />,
    title: "Dashboard and Alerts",
    features: [
      "Department-wise Dashboard",
      "Business Intelligence Tool",
      "Document Management System",
    ],
  },
  {
    icon: <HandshakeIcon className="img" />,
    title: "CRM & Order Processing",
    features: ["Lead Management", "Opportunity Management", "Order Management"],
  },
  {
    icon: <MoneyIcon className="img" />,
    title: "Finance Management",
    features: [
      "Compliance with Sch VI & IFRS",
      "Automatic TDS & Tax Calculation",
      "Multi-Dimensional Reporting",
    ],
  },
  {
    icon: <CartIcon className="img" />,
    title: "Purchase Management",
    features: ["Supplier Evaluation", "Request for Quote", "Quote Comparison"],
  },
  {
    icon: <ViewIcon className="img" />,
    title: "Purchase Management",
    features: ["Supplier Evaluation", "Request for Quote", "Quote Comparison"],
  },
];

const industries = [
  { img: steelimg, name: "Steel" },
  { img: pharmaimg, name: "Pharma" },
  { img: garment, name: "Garment" },
  { img: plastic, name: "Plastic" },
  { img: cable, name: "Cable" },
  { img: concrete, name: "Concrete" },
  { img: leather, name: "Leather" },
  { img: footwear, name: "Footwear" },
  { img: automobile, name: "Automobile" },
  { img: electrical, name: "Electrical" },
  { img: chemicals, name: "Chemicals" },
  { img: fmcg, name: "FMCG" },
  { img: mining, name: "Mining" },
  { img: printing, name: "Printing" },
  { img: rubber, name: "Rubber" },
  { img: wood, name: "Wood" },
];

const IntegrateModules = () => {
  return (
    <div className="integrate-modules-container">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        {/* Heading */}
        <Grid item xs={12} className="erp-heading-container">
          <span className="erpheading">
            Easy-to-integrate <span className="erptitle">Modules</span>
          </span>
        </Grid>

        {/* Description */}
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
        >
          <div className="erpdesc">
            Never before has software customization been so easy!
          </div>
        </Grid>

        {/* Module Cards */}
        <Grid
          container
          spacing={3}
          className="industrial-container"
          style={{ marginTop: "20px" }}
        >
          {modules.map((module, index) => (
            <Grid key={index} item xs={12} md={2.8}>
              <div className="induinfo">
                <div className="indimg">{module.icon}</div>
                <h3>{module.title}</h3>
                <ul>
                  {module.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Industries Section */}
      <div className="indu-container">
        <Grid container justifyContent="center">
          <Grid item xs={12} className="erp-heading-container">
            <span className="erpheading">
              Wide array of <span className="erptitle">Industries</span>
            </span>
          </Grid>

          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
          >
            <div className="erpdesc">
              Making your business operations more streamlined by Using Absolute
              Manufacturing ERP
            </div>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="industries-wrapper">
              <Grid
                container
                spacing={2}
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                {industries.map((industry, index) => (
                  <Grid key={index} item xs={3} md={1.2}>
                    <img
                      src={industry.img}
                      className="prodimg"
                      alt={industry.name}
                    />
                    <div className="imgname">{industry.name}</div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* business section */}
      <Grid
        container
        className="black-container"
        justifyContent="center"
        alignItems="center"
      >
        {/* Heading */}
        <Grid item xs={12} className="business-container">
          <h1>
            Empower your small and medium business with the most-trusted
            cloud-based Manufacturing ERP systems
          </h1>
        </Grid>

        <div class="container">
          <div>
            <CurrencyRupeeIcon className="currency" />
            <br></br>
            <span className="currtext">Cost-Saving</span>
          </div>
          <div>
            <LockIcon className="currency" />
            <br></br>
            <span className="currtext">Complete-Security</span>
          </div>
          <div>
            <ShuffleIcon className="currency" />
            <br></br>
            <span className="currtext">Flexiblity</span>
          </div>
          <div>
            <NfcIcon className="currency" />
            <br></br>
            <span className="currtext">Scalability</span>
          </div>
          <div>
            <PermIdentityOutlinedIcon className="currency" />
            <br></br>
            <span className="currtext">Peace of Mind Ensured</span>
          </div>
          <div>
            <AccessTimeOutlinedIcon className="currency" />
            <br></br>
            <span className="currtext">Faster Time to Value</span>
          </div>
        </div>
        <Grid item sm={12}>

        <Button className="busindemobtn" variant="contained">
          FREE DEMO
        </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default IntegrateModules;
