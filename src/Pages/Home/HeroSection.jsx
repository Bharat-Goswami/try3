import React from "react";
import Resume from "../Resume/Resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons";
export default function HeroSection() {

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Resume.pdf'; // replace with your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Bharat</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Proficient in the MERN stack, leveraging React, Redux, and
            JavaScript to craft scalable web applications.
            {/* <br /> Dolorum, quas. Amet soluta assumenda cum? */}
          </p>
        </div>
        <button className="btn btn-primary" onClick={downloadResume}>Resume ( 73kb ) <FontAwesomeIcon icon={faDownload} size="lg" /></button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Bharat4.png" alt="Hero Section" />
      </div>
    </section>
  );
}
