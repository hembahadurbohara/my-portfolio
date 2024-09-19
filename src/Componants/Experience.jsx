import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Experience() {

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

  return (
    <div className="container-fluid bg-warning bg-gradient py-4">
    <div className="container py-5">
      <div className="text-center about fs-1 fw-bold pb-5">
        <i className="fa-solid fa-briefcase"></i> My Experiences
      </div>
      <div className="experience-tree">
        <div data-aos="fade-down" className="experience-item ">
          <div className="content shadow">
            <h3>
              Completed 7 Days WordPress Web Development Training from
              E-commerce Sathi.
            </h3>
            <p>Apr 2024</p>
            <p>
              Learned building responsive websites and web applications using
              modern technologies like Wordpress
            </p>
          </div>
        </div>

        <div data-aos="fade-down" className="experience-item">
          <div className="content shadow">
            <h3>Completed Web Design Training from Broadway Infosys.</h3>
            <p>Dec 2023 - Feb 2024</p>
            <p>
              Learned interactive and user-friendly web components and building
              responsive websites with JavaScript, Bootstrap, and React.
            </p>
          </div>
        </div>

        <div data-aos="fade-down" className="experience-item">
          <div className="content shadow">
            <h3>Doing Transcription Project on Appen.com</h3>
            <p>July 2021 - Present</p>
            <p>
              3 Years of experience in Transcription Project Completed Nepali
              Audio Collection Project, Nepali script writing Project & Nepali
              and Hindi Transcription Project
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Experience;
