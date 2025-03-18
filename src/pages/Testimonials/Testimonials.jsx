import React from "react";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import testimg1 from "../../assets/images/adkumar.jpg";
import img1 from "../../assets/images/adkumar.png"
import img2 from "../../assets/images/kjs.png"
import img3 from "../../assets/images/insopack.png"
import img4 from "../../assets/images/zb.png"
import img5 from "../../assets/images/lesokart.png"
import testimg2 from "../../assets/images/kjs_img.jpg"
import testimg3 from "../../assets/images/insopack_img.jpg"
import testimg4 from "../../assets/images/zb_img.jpg"
import testimg5 from "../../assets/images/lesokart_img.jpg"

const testimonialsData = [
  {
    name: "Mr. Narendra Kumar",
    role: "Owner/Director",
    industry: "Automobile, Electrical, Packaging & Medical sector",
    feedback:"ERP software plays a vital role in any manufacturing industry, and for my manufacturing unit, I also needed a complete customized ERP software, which can help me to integrate all the processes and departments. I am glad to find Absolute and choose them to increase my company's growth. After, opting their services I was amazed to see the results. My technical staff and other backend staff are pretty much satisfied with the entire process. There's no doubt that Absolute is a cost-effective platform.",
    image: testimg1,
    image2:img1
  },
  {
    name: "Mr. Vineet Raj Pillai",
    role: "CEO",
    industry: "Concrete",
    feedback:
      "For us, it was not just the products of Absolute ERP but also the people behind them, the kind of commitment and ability which they possess is rarely seen in any other company. A lot of times we have seen their team go beyond existing requirements and make modifications and changes that are very demanding. Their ability to provide promised results in such difficult circumstances has been great. They ensured scalability in all their modules, securing future business demands.",
    image: testimg2,
    image2:img2
  },
  {
    name: "Mr. Rajesh Verma",
    role: "Business Head",
    industry: "EPE Sheet & Air Bubble Roll",
    feedback:
      "Absolute is one of the perfect option that we have chosen for our Business Process Management. Absolute ERP actually offers great flexibility, a wide range of functionality, and scalability. We absolutely liked the amazing roadmap presented by the Absolute team. Their devoted 24/7 support helps to get industry-specific solutions. They have excellent knowledge and are always willing to fulfill their promises. Absolute team has a high level of enthusiasm and confidence to show the detailed demonstration to users. My entire business is streamlined and user interface elements in the system are familiar. Our backend technical staff fits the skill sets and is happily satisfied with the entire process. We truly believe that Absolute will be a cost-effective platform that help our business to grow more in the future.",
    image: testimg3,
    image2:img3
  },
  {
    name: "Mr. Rizwan",
    role: "Director",
    industry: "Footwear",
    feedback:
      "Thanks to Absolute Team's thorough understanding of the Shoe industry and their deep knowledge of Business Process, we've been able to get an extraordinary amount of information from our ERP system Absolute, in the precise format that we want. I want to personally communicate my very high regard and respect for the quality of the support team that Absolute Team provided for this project. They have all been extremely competent, very hard working and an absolute pleasure to work with.",
    image: testimg4,
    image2:img4
  },
  {
    name: "Mr. Pratik Patil",
    role: "Managing Director",
    industry: "Machine Laser Cutting",
    feedback:
      "I am really impressed by the quality of services I received from Absolute ERP Solutions. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good and ERP Solution for my growing business. My Accounts and Operation process efforts reduced a lot  and I will definitely use your services again and again.",
    image: testimg5,
    image2:img5
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true, 
  };

  return (
    <div className="test-container">
      <Grid container justifyContent="center">
        {/* Heading */}
        <Grid item xs={12} className="test-heading-container">
          <span className="testheading">
            Our Happy <span className="testtitle">Clients</span>
          </span>
        </Grid>

        {/* Carousel */}
        <Grid item xs={10} style={{ marginTop: "30px" }}>
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <Grid container>
                  {/* Image Section */}
                  <Grid item xs={12} md={6} style={{ textAlign: "right", justifyContent:"right", display:"flex" }}>
                    <div className="testimg1">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </Grid>

                  {/* Text Section */}
                  <Grid item xs={12} md={6} style={{ padding: "10px" }}>
                    {/* Name and Role */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        // marginBottom: "10px",
                      }}
                    >
                      <div className="comlogo">
                        <img src={testimonial.image2}></img>
                      </div>
                      <div style={{ marginLeft: "15px" }}>
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            display: "block",
                          }}
                        >
                          {testimonial.name}
                        </span>
                        <span
                          style={{ color: "gray", fontSize: "14px", display: "block" }}
                        >
                          {testimonial.role}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="descr">
                      <span style={{ fontWeight: "500" }}>
                        Industry - {testimonial.industry}
                      </span>
                      <p>{testimonial.feedback}</p>
                    </div>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonials;