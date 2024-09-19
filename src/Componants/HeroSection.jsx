import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import img from '../Sources/my.png';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function HeroSection() {
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Web Designer', 'Web Developer'],
    loop: {}, 
  });

  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS and set the animation duration
  }, []);

  return (
    <div className="container-fluid bg-warning bg-gradient">
    <div className="container   py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-6 col-md-6  col-sm-12 text-center text-md-start">
          <h2 className="fs-1 hi">
            Hi There,<br /> I'm Hem Bahadur <span className="bo">Bohara</span>
          </h2>
          <p data-aos="fade-down"  className="fs-4 hi py-2">
            I Am Into <span className="bo fw-semibold">{text}</span>
            <Cursor />
          </p>
          {/* <button   type="button" className="btn btn-primary butan btn-lg fw-semibold">
            Hire Me
          </button> */}
          <a data-aos="fade-down" class="btn btn butan btn-lg fw-semibold" href="https://wa.me/9779840046062" role="button">Hire Me</a>


          <div id="social-iconss" class="social-iconss pt-3">
          <a
    href="https://www.linkedin.com/in/hem-bahadur-bohara-292677315/"
    class="social-icon linkedin"
  >
    <i class="fab fa-linkedin-in"></i>
  </a>
  <a href="https://github.com/hembahadurbohara" class="social-icon github">
    <i class="fab fa-github"></i>
  </a>
  <a href="mailto:hbohara54@gmail.com" class="social-icon email">
    <i class="fas fa-envelope"></i>
  </a>
  <a href="https://www.facebook.com/hemansu.bohara" class="social-icon facebook">
    <i class="fab fa-facebook"></i>
  </a>
  <a href="https://www.tiktok.com/@hembbohara" class="social-icon tiktok">
  <i class="fa-brands fa-tiktok"></i>
  </a>
  </div>
        </div>
        

        {/* Image Section */}
        <div className="col-lg-6 col-md-6 text-center col-sm-12 mt-4 mt-md-0">
          <img data-aos="fade-down"  className="img-fluid my" src={img} alt="Profile" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default HeroSection;
