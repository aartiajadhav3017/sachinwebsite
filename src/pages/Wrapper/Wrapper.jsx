import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PersonIcon from "@mui/icons-material/Person";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DraftsIcon from "@mui/icons-material/Drafts";
import DescriptionIcon from "@mui/icons-material/Description";
import BusinessIcon from "@mui/icons-material/Business";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import "./Wrapper.css";

const Wrapper = () => {
  const [phone, setPhone] = useState("+91");
  const [captchaError, setCaptchaError] = useState("");
  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
  });

  useEffect(() => {
    loadCaptchaEnginge(6); // Load captcha when component mounts
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name){
      setErrors({name:"Name is required"})
      return false;
    } 
    if (!formData.phone || formData.phone.length < 10){
      setErrors({phone:"Enter a valid phone number"})
      return false;
    }
    if (
      !formData.email ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ){
      setErrors({email:"Enter a valid email"})
    }
    if (!formData.company){
      setErrors({company:"Company name is required"})
    } 

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = () => {
    setCaptchaError(""); // Reset captcha error before validation

    if (!validateForm()) return;

    if (!captchaValue.trim()) {
      setCaptchaError("Captcha is required");
      return;
    }

    console.log("Entered Captcha:", captchaValue); // Debugging
    const isValidCaptcha = validateCaptcha(captchaValue);
    console.log("Captcha Validation Result:", isValidCaptcha); // Debugging

    if (!isValidCaptcha) {
      setCaptchaError("Incorrect captcha, please try again.");
      setCaptchaValue(""); // Clear input
      loadCaptchaEnginge(6); // Reload captcha
      return;
    }

    // Captcha is correct
    setCaptchaError("");

    // Successful Submission
    console.log("✅ Form Submitted Successfully:", formData);
    alert("✅ Form submitted successfully!");

    // Reset form fields
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
    });

    setCaptchaValue(""); // Reset captcha field
    setPhone("+91"); // Reset phone number input
    loadCaptchaEnginge(6); // Reload new captcha after submission
  };
  return (
    <>
      <Grid container className="backimg">
        <Grid container className="transparent-box">
          {/* Left Side */}
          <Grid item md={6} className="content">
            <span className="heading">Holi Offer - UpTo 20% OFF</span>
            <br />
            <span className="subheading">
              Offer valid till 15<sup>th</sup> March, 2025
            </span>
            <h1>Manufacturing ERP Software for Production Management</h1>
            <h3>
              Streamlining your business processes & reducing operational costs
            </h3>
            <Grid container>
              <Grid item md={6}>
                {[
                  "ERP for Steel Manufacturing",
                  "ERP for Pharma Manufacturing",
                  "ERP for Garments Manufacturing",
                  "ERP for Steel Manufacturing",
                  "ERP for Cable & Wire Manufacturing",
                ].map((text, index) => (
                  <div className="title" key={index}>
                    <CheckCircleOutlineIcon style={{ fontSize: "20px" }} />
                    <span className="processes">{text}</span>
                  </div>
                ))}
              </Grid>
              <Grid item md={6} style={{ paddingLeft: "20px" }}>
                {[
                  "ERP for Concrete Manufacturing",
                  "ERP for Leather Manufacturing",
                  "ERP for Footwear Manufacturing",
                  "ERP for Automobile Manufacturing",
                  "ERP for Electrical Manufacturing",
                ].map((text, index) => (
                  <div className="title" key={index}>
                    <CheckCircleOutlineIcon style={{ fontSize: "20px" }} />
                    <span className="processes">{text}</span>
                  </div>
                ))}
              </Grid>
            </Grid>
            <div className="processes1">
              Manufacturing ERP Software reduced the time and made the system
              more mature to deliver the product or service on time.
            </div>
          </Grid>

          {/* Right Side (Aligned to Right) */}
          <Grid item xs={12} md={6} className="right-container">
            <Grid item xs={12} md={8} className="hello-box">
              <h2>Get a Free Trial</h2>
              {/* name input */}
              <div style={{ display: "flex" }}>
                <div className="nameimg" style={{}}>
                  <PersonIcon
                    sx={{ color: "white" }}
                    style={{ marginTop: "10px", height: "20px" }}
                  />
                </div>
                <input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                />
                {errors.name && <span className="error-text">*</span>}
              </div>
              {errors.name && <span className="error-text">{errors.name}</span>}

              {/* Contact input */}
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div className="nameimg" style={{}}>
                  <PhoneAndroidIcon
                    sx={{ color: "white" }}
                    style={{ marginTop: "10px", height: "17px" }}
                  />
                </div>
                <div>
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    inputStyle={{
                      width: "100px",
                      height: "40px",
                    }}
                  />
                </div>
                <input
                  placeholder="Phone No"
                  required
                  className="input2"
                  value={formData.phone}
                  onChange={(e) => {
                    // Allow only digits (0-9)
                    const value = e.target.value.replace(/\D/g, "");
                    setFormData((prev) => ({ ...prev, phone: value }));
                  }}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  inputStyle={{ width: "100px" }}
                />
                {errors.phone && <span className="error-text">*</span>}
              </div>
              {errors.phone && (
                <span className="error-text">{errors.phone}</span>
              )}

              {/* Email input */}
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div className="nameimg" style={{}}>
                  <DraftsIcon
                    sx={{ color: "white" }}
                    style={{ marginTop: "10px", height: "20px" }}
                  />
                </div>
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                />
                {errors.email && <span className="error-text">*</span>}
              </div>
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
              {/* Industry select dropdown */}
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div className="nameimg" style={{}}>
                  <DescriptionIcon
                    sx={{ color: "white" }}
                    style={{ marginTop: "10px", height: "20px" }}
                  />
                </div>

                <select className="input" size="1" menuPlacement="bottom">
                  <option value="0">-- Select Industry --</option>
                  <option selected="selected" value="1">
                    Manufacturing Industry
                  </option>
                  <option value="2">Steel Industry</option>
                  <option value="3">Chemicals Industry</option>
                  <option value="4">Cosmetic Industry</option>
                  <option value="5">Fiber Industry</option>
                  <option value="6">Concrete Ready Mix Industry</option>
                  <option value="7">Filter Manufacturing</option>
                  <option value="8">Garments/Apparel Industry</option>
                  <option value="28">Textile Industry</option>
                  <option value="9">Cement &amp; Lime Industry</option>
                  <option value="10">Electrical Goods Industry</option>
                  <option value="11">Electronics Goods Industry</option>
                  <option value="12">Optical Equipment Industry</option>
                  <option value="13">Food &amp; Beverages Industry</option>
                  <option value="14">Leather Industry</option>
                  <option value="15">Footwear Industry</option>
                  <option value="16">Machinery &amp; Equipment Industry</option>
                  <option value="17">Petroleum Products Industry</option>
                  <option value="18">Mining &amp; Quarrying Industry</option>
                  <option value="19">Non Metal Industry</option>
                  <option value="20">Pharmaceuticals Industry</option>
                  <option value="21">Printing Industry</option>
                  <option value="22">Plastic Industry</option>
                  <option value="23">Publishing Industry</option>
                  <option value="24">Rubber Industry</option>
                  <option value="25">Wood Industry</option>
                  <option value="26">Automotive Parts Industry</option>
                  <option value="27">Others</option>
                </select>
              </div>

              {/* Company input */}
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div className="nameimg">
                  <BusinessIcon
                    sx={{ color: "white" }}
                    style={{ marginTop: "10px", height: "20px" }}
                  />
                </div>
                <input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="input"
                />
                {errors.company && <span className="error-text">*</span>}
              </div>
              {errors.company && (
                <span className="error-text">{errors.company}</span>
              )}
              {/* captcha input */}
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div className="nameimg" style={{}}>
                  <MapsUgcOutlinedIcon
                    sx={{ color: "white" }}
                    style={{ marginTop: "10px", height: "20px" }}
                  />
                </div>
                <input
                  name="captcha"
                  placeholder="Enter Captcha Code"
                  value={captchaValue}
                  onChange={(e) => setCaptchaValue(e.target.value)}
                  className="captchainput"
                />

                {/* Show Captcha Template Below Input */}
                <div className="captchainput2">
                  <LoadCanvasTemplateNoReload
                    style={{ marginTop: "10px", width: "100px" }}
                  />
                </div>
              </div>
              {/* Show error message only if captcha is incorrect */}
              {captchaError && (
                <span className="error-text">{captchaError}</span>
              )}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button className="submit" onClick={submit}>
                  Get a Free Trial
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Wrapper;
