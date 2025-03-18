import { Grid } from "@mui/material";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import comimg1 from "../../../assets/images/carousel2/adkumar.jpg";
import comimg2 from "../../../assets/images/carousel2/narayan-sewa.jpg";
import comimg3 from "../../../assets/images/carousel2/prim-cable.jpg";
import comimg4 from "../../../assets/images/carousel2/rebs.jpg";
import comimg5 from "../../../assets/images/carousel2/rockwin.jpg";
import comimg6 from "../../../assets/images/carousel2/solartive.jpg";
import comimg7 from "../../../assets/images/carousel2/tiptop.jpg";
import comimg8 from "../../../assets/images/carousel2/upbeat.jpg";
import comimg9 from "../../../assets/images/carousel2/vintex.jpg";
import comimg10 from "../../../assets/images/carousel2/virat.jpg";

const clients = [
  { src: comimg6, alt: "Ardee Engineering Pvt. Ltd." },
  { src: comimg7, alt: "DTRANS EMS PRIVATE LIMITED" },
  { src: comimg8, alt: "Eff N Bee Hospitality Pvt. Ltd." },
  { src: comimg9, alt: "Evotech Business Solutions" },
  { src: comimg3, alt: "Alfa Boilers Pvt. Ltd." },
  { src: comimg1, alt: "AAA SWITCHGEAR PVT. LTD." },
  { src: comimg2, alt: "Al Wataniya Catering" },
  { src: comimg10, alt: "Gardex" },
  { src: comimg4, alt: "Advanced Anmol Metcomp Pvt. Ltd." },
  { src: comimg5, alt: "AOV Group" },
];
const CompanyCarousel3 = () => {
  return (
    <>
      <div
        style={{
          marginTop: "0px",
          width: "90%",
          justifyContent: "center",
          marginLeft: "1%",
        }}
      >
        <Splide
          options={{
            type: "loop",
            perPage: 7,
            perMove: 1,
            gap: "10px",
            arrows: false,
            pagination: false,
            drag: false, // Disable manual dragging to ensure continuous movement
            direction: "rtl",
            autoWidth: false, // Ensure fixed number of images fit in the viewport
            focus: 0,
            padding: "15px",
            pauseOnHover: true,
            pauseOnFocus: true,
            autoScroll: {
              speed: 0.7, // Adjust speed for smooth scrolling
            },
            breakpoints: {
                768: {
                  perPage: 4, // Show 4 images on screens ≤ 768px (tablets & mobile)
                },
                480: {
                  perPage: 3, // Optionally, show 3 images on very small screens
                },
              },
          }}
          extensions={{ AutoScroll }}
          aria-label="Client Logos"
        >
          {clients.map((client, index) => (
            <SplideSlide key={index}>
              <div
                style={{
                    margin: "10px",
                    borderRadius: "5px",
                    boxShadow: "1px 1px 10px lightgray",
                    padding: "10px",
                    paddingLeft:"25px"
                }}
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  style={{ width: "100%", padding: "10px" }}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default CompanyCarousel3;
