import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Skills() {

    useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);

  return (
    <>
    <div className="container-fluid py-3 bg-warning bg-gradient bg-opacity-10">
    <div   className="container py-5 ">
  <div className="text-center about fs-1 fw-bold pb-5">
  <i class="fa-solid fa-toolbox"></i>  My Skills
  </div>
  <div data-aos="fade-down" className="row  text-center pt-5">
    <div className="col-6 col-md-4 col-lg-2 mb-4">
      <i className="fab fa-html5 fa-3x text-danger"></i>
      <p className="fs-5 mt-2">HTML</p>
    </div>
    <div className="col-6 col-md-4 col-lg-2 mb-4">
      <i className="fab fa-css3-alt fa-3x text-primary"></i>
      <p className="fs-5 mt-2">CSS</p>
    </div>
    <div className="col-6 col-md-4 col-lg-2 mb-4">
      <i className="fab fa-js-square fa-3x text-warning"></i>
      <p className="fs-5 mt-2">JavaScript</p>
    </div>
    <div className="col-6 col-md-4 col-lg-2 mb-4">
      <i className="fab fa-bootstrap fa-3x text-purple"></i>
      <p className="fs-5 mt-2">Bootstrap</p>
    </div>
    <div className="col-6 col-md-4 col-lg-2 mb-4">
      <i className="fab fa-react fa-3x text-info"></i>
      <p className="fs-5 mt-2">React</p>
    </div>
    <div className="col-6 col-md-4 col-lg-2 mb-4">
      <i className="fab fa-github fa-3x text-dark"></i>
      <p className="fs-5 mt-2">GitHub</p>
    </div>
  </div>
</div>
</div>

    </>
  )
}

export default Skills