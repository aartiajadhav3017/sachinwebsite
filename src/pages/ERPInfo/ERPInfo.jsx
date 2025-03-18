import React from "react";
import { Button, Grid } from "@mui/material";
import "./ERPInfo.css";
import {
  FileCopy as FileCopyIcon,
  EventAvailable as EventAvailableIcon,
  DescriptionOutlined as DescriptionOutlinedIcon,
  List as ListIcon,
  ViewInAr as ViewInArIcon,
  Apartment as ApartmentIcon,
  Lan as LanIcon,
  Shuffle as ShuffleIcon,
  Construction as ConstructionIcon,
  ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
  Microsoft as MicrosoftIcon,
} from "@mui/icons-material";

const erpFeatures = [
  { icon: <FileCopyIcon />, label: "Multi-Level BOM" },
  { icon: <EventAvailableIcon />, label: "Auto Production Schedule" },
  {
    icon: <DescriptionOutlinedIcon />,
    label: "MRP (Material Requisition Planning)",
  },
  { icon: <ListIcon />, label: "Multiple Production Houses" },
  { icon: <ViewInArIcon />, label: "Multiple Warehouse Management" },
  { icon: <ApartmentIcon />, label: "Multiple Company" },
  { icon: <LanIcon />, label: "Multi-Level Approval" },
  { icon: <ViewInArIcon />, label: "Multi-Level Inventory" },
  { icon: <ShuffleIcon />, label: "Process Wise Inventory" },
  { icon: <ConstructionIcon />, label: "Machine Maintenance Planning" },
  { icon: <ThumbUpAltOutlinedIcon />, label: "Guarantee, Warranty & AMC" },
  { icon: <MicrosoftIcon />, label: "Rack Management" },
];

const ERPInfo = () => {
  return (
    <div className="erp-container">
      <Grid container justifyContent="center">
        <Grid item xs={12} className="erp-heading-container">
          <span className="erpheading">
            #1 ERP for for for Solutions Provider for{" "}
            <span className="erptitle">Manufacturers</span>
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
            Cloud Base Manufacturing ERP always give an edge over the competitor
            as all user can manage its work from anywhere without territorial
            limitation.
          </div>
        </Grid>
      </Grid>

      {/* ERP Features Section */}
      <Grid
        container
        spacing={3}
        className="industrial-container"
        style={{ marginTop: "20px" }}
      >
        {erpFeatures.map((feature, index) => (
          <Grid item xs={12} md={3.7} key={index}>
            <div className="erpinfo">
              <div className="erpimg">
                {React.cloneElement(feature.icon, {
                  sx: { color: "white", height: "30px", marginTop: "5px" },
                })}
              </div>
              <span>{feature.label}</span>
            </div>
          </Grid>
        ))}
      </Grid>
      <Button className="freedemobtn" variant="contained"   >
        FREE DEMO
      </Button>

      
    </div>
  );
};

export default ERPInfo;
