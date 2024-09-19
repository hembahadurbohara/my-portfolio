import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Footer() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <>
      <div className="container-fluid pt-5 pb-3 footerr bg-dark-subtle">
        <div className="container">
          <div className="row">
            <div id="hemm" className="col-12 col-md-4 mb-5 ">
              <div className="fs-1 text-danger name fw-semibold">
                H <span className="fs-6 text-black">em Bahadur Bohara</span>.
              </div>
              <p data-aos="fade-down" className="pt-2 fs-6">
                Thank you for visiting my personal portfolio website. Connect
                with me over socials.
              </p>
              <p data-aos="fade-down" className="fs-6">
                Keep Rising 🚀. Connect with me over live chat!
              </p>
            </div>
            <div className="col-12 col-md-4  mb-5">
              <div className="fs-3 text-danger fw-semibold pb-4 text-center">
                Quick Links
              </div>
              <ul data-aos="fade-down" className="quick text-center ">
                <li >
                  <a href="/">
                    <i class="fa-solid fa-house"></i> Home
                  </a>
                </li>
                <li className="py-2">
                  <a  href="/about">
                    <i class="fa-solid fa-user"></i> About Me
                  </a>
                </li>
                <li>
                  <a href="/skills">
                    <i class="fa-solid fa-toolbox"></i> My Skills
                  </a>
                </li>
                <li className="py-2">
                  <a href="/work">
                    <i className="fa-solid fa-folder-open"></i> My Project
                  </a>
                </li>
                <li>
                  <a href="/experience">
                    <i className="fa-solid fa-briefcase"></i> My Experience
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 text-center">
              <div className="fs-3 text-danger fw-semibold text-center pb-4">
                Contact Info
              </div>
              <p data-aos="fade-down">
                <i class="fa-solid fa-phone-volume"></i>{" "}
                +977-9805761214/+977-9840046062
              </p>
              <p data-aos="fade-down">
                <i class="fa-solid fa-at"></i> hbohara54@gmail.com
              </p>
              <p data-aos="fade-down">
                <i class="fa-solid fa-location-dot"></i> Kathmandu, Nepal
              </p>
              <div data-aos="fade-down" class="social">
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
          </div>
        </div>
      </div>

      <div className="container-fluid fw-normal fs-6  footer py-3 text-center ">
      &copy; 2024 <a href="">Hem Bahadur Bohara</a>. All Rights Reserved 
      </div>
    </>
  );
}

export default Footer;
