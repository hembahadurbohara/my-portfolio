import React from 'react'
import img from '../Sources/buddha.jpg'
import img1 from '../Sources/insurance.jpg'
import img2 from '../Sources/travel.jpg'
import img3 from '../Sources/aama.jpg'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Work() {

    useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);
  return (
    <>
    <div className="container py-5">
  <div className="text-center about fs-1 fw-bold pb-5">
    <i className="fa-solid fa-folder-open"></i> My Projects
  </div>
  <div data-aos="fade-down" className="row ">
    <div className="col-12 col-md-6 col-lg-4 py-5 mb-4 ">
      <a href="https://budhdha-store.vercel.app/" target="_blank" rel="noopener noreferrer">
        <div className="project-card border">
          <img
            src={img} 
            alt="Project 1"
            className="img-fluid"
          />
          <div className="overlay">
            <div className="overlay-text">View Project</div>
          </div>
        </div>
      </a>
    </div>

    <div className="col-12 col-md-6 col-lg-4 py-5 mb-4">
      <a href="https://dainty-selkie-5e6dae.netlify.app/" target="_blank" rel="noopener noreferrer">
        <div className="project-card border">
          <img
            src={img1} 
            alt="Project 2"
            className="img-fluid"
          />
          <div className="overlay">
            <div className="overlay-text">View Project</div>
          </div>
        </div>
      </a>
    </div>

    <div className="col-12 col-md-6 col-lg-4 py-5 mb-4">
      <a href="https://travel-website-mu-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
        <div className="project-card border">
          <img
            src={img2}
            alt="Project 3"
            className="img-fluid"
          />
          <div className="overlay">
            <div className="overlay-text">View Project</div>
          </div>
        </div>
      </a>
    </div>

    <div className="col-12 col-md-6 col-lg-4 pt-5 mt-4">
      <a href="https://aamafoundation.vercel.app/" target="_blank" rel="noopener noreferrer">
        <div className="project-card border">
          <img
            src={img3}
            alt="Project 4"
            className="img-fluid"
          />
          <div className="overlay">
            <div className="overlay-text">View Project</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>



    </>
  )
}

export default Work