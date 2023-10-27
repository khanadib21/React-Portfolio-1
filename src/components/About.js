import React from "react";
import ProfileImg from "../images/profileImg.jpg";
import {Image } from "react-bootstrap";
import "../style/App.css";

function About() {
  return (
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <div>
        <div>
          <div
            xs={12}
            md={4}
            className="d-flex align-items-center justify-content-center mb-2 mb-md-3"
          >
            <Image src={ProfileImg} className="profile-image" />
          </div>
          <div xs={12} md={8}>
            <div>
              <div>
                <h2 className="text-center mb-4">
                  About Adib Khan
                </h2>
                <p>
                  My name is Adib Khan, I completed my Bachelor's at University of Texas at Arlington majoring in Finance. I have worked with Kapp-Chemie GMBH as a Financial Clerk for two years. Currently working as a Senior Reconciliations Analyst at Fidelity Investments. I am currently also pursuing my Bootcamp for Full Stack Web Development at UT Austin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
