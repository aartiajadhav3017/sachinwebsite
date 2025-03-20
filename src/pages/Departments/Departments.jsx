import React from "react";
import "./Departments.css";
import { Grid } from "@mui/material";
import {
  FileCopyOutlined as FileCopyIcon,
  DescriptionOutlined as DescriptionIcon,
  Settings as SettingsIcon,
  ShoppingCart as ShoppingCartIcon,
  ViewInAr as ViewInArIcon,
  LocalShipping as LocalShippingIcon,
  TrendingUp as TrendingUpIcon,
  AttachMoney as AttachMoneyIcon,
  HandshakeOutlined as HandshakeIcon,
  PersonOutlineOutlined as PersonIcon,
  ContentCopyOutlined as ContentCopyIcon,
  Lan as LanIcon,
} from "@mui/icons-material";
import processimg from "../../assets/images/process.png";
import batch from "../../assets/images/batch.png";
import descrete from "../../assets/images/discrete.png";
import repetative from "../../assets/images/repetitive.png";
import jobwork from "../../assets/images/job-work.png";

const Departments = () => {
  const departments = [
    { icon: FileCopyIcon, label: "MRP", dark: true },
    { icon: DescriptionIcon, label: "BOM", dark: false },
    { icon: SettingsIcon, label: "Production", dark: true },
    { icon: ShoppingCartIcon, label: "Purchase", dark: false },
    { icon: ViewInArIcon, label: "Inventory", dark: true },
    { icon: LocalShippingIcon, label: "Warehouse", dark: false },
    { icon: TrendingUpIcon, label: "Sales", dark: true },
    { icon: AttachMoneyIcon, label: "Finance", dark: false },
    { icon: HandshakeIcon, label: "CRM", dark: true },
    { icon: PersonIcon, label: "HR & Payroll", dark: false },
    { icon: ContentCopyIcon, label: "Multi Company", dark: true },
    { icon: LanIcon, label: "Multi Branch", dark: false },
  ];

  const processItems = [
    { img: processimg, label: "PROCESS (CONTINUOUS) MANUFACTURING ERP" },
    { img: batch, label: "PROCESS (BATCH) MANUFACTURING ERP" },
    { img: descrete, label: "DISCRETE MANUFACTURING ERP" },
    { img: repetative, label: "REPETITIVE MANUFACTURING ERP" },
    { img: jobwork, label: "JOB WORK MANUFACTURING ERP" },
  ];

  return (
    <>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        className="main-container"
      >
        {departments.map(({ icon: Icon, label, dark }, index) => (
          <Grid item xs={3} md="auto" key={index} style={{ marginTop: "-10px" }}>
            <div className={dark ? "backdiv" : "backdivlight"}>
              <Icon
                sx={{
                  fontSize: 40,
                  margin: 1,
                  color: dark ? "white" : "inherit",
                }}
              />
              <span style={{fontSize:"13px", justifyContent:"center"}}>{label}</span>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid container className="industrial-container">
        <Grid xs={12}>
          <div>
            <span className="industrial">
              Industrial Manufacturing ERP Software
            </span>
            <br></br>
            <span className="compdesc">
              Our company develops discrete applications and software programs
              for processes and batches. Our solutions include:
            </span>
          </div>
        </Grid>
        <Grid
          container
          spacing={5}
          className="industrial-container"
          style={{ marginTop: "-20px" }}
        >
          {processItems.map(({ img, label }, index) => (
            <Grid item xs={12} md={1.9} key={index}>
              <div className="process">
                <img src={img} alt={label} />
                <span>{label}</span>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Departments;
