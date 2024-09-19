import React from "react";
import img from "../Sources/photo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function About() {

    useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);
  return (
    <>
    
    
      <div className="container py-5">
  <div className="text-center about fs-1 fw-bold pb-5">
    <i className="fa-solid fa-user"></i> About Me
  </div>
  <div className="row">
    <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
      <img
        data-aos="fade-down"
        className="myp shadow img-fluid"
        src={img}
        alt="My Profile"
      />
    </div>
    <div className="col-12 col-md-6 align-self-center">
      <h2 data-aos="fade-down" className="fs-1 " id="hemm">I'm Hem</h2>
      <p id="hemm" className="fs-4 fw-semibold pb-2 web">Web Designer | Web Developer</p>
      <p data-aos="fade-down">
        I am a Web Designer / Web developer based in Kathmandu, Nepal. I'm
        passionate and creative, dedicated to crafting visually stunning and
        user-friendly websites.
        <br />
        <br />
        I specialize in designing responsive websites that not only look great
        but also provide seamless user experiences across all devices. My design
        process is driven by creativity, attention to detail, and a deep
        understanding of modern design trends, coupled with technical expertise
        in HTML, CSS, JavaScript, Bootstrap, React, and GitHub.
        <br />
        <br />
        I am very passionate about improving my coding skills & designing/
        developing websites. Working for myself to enhance my abilities and
        love to build website clones.
      </p>
    </div>
  </div>
</div>

    </>
  );
}

export default About;
