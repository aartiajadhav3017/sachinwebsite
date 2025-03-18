import React from "react";
import whatsapp from "../../assets/images/wapp-icon.png"
const Whatsapp = () => {

  return (
    <a
    href="https://web.whatsapp.com/send?phone=7900340040&text=Hi, I am interested in knowing more about Absolute ERP. Please share the details. My name is..."
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      textDecoration: "none",
    }}
  >
      {/* <WhatsAppIcon  /> */}
      <img src={whatsapp} style={{ height: "50px" }}/>
    </a>
  );
};

export default Whatsapp;
