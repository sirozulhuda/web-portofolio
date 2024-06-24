import aboutImg from "../assets/img/about-img.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto mt-16 mb-16" id="about">
      <h1 className="text-center font-bold text-xl underline mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:w-3/4 mx-auto md:space-x-6">
        <img
          src={aboutImg}
          alt="About Image"
          className="w-[250px] md:w-[275px]"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <p
          className="text-xs text-center px-14 mt-6 font-medium md:text-left md:px-10 lg:px-24 md:pb-8 md:w-1/2 md:text-sm"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Hi, I am <span className="font-bold">Sirozul Huda</span>! <br /> As an
          <span className="font-bold"> Informatics Engineering</span> student at
          <span className="font-bold">
            {" "}
            Nahdlatul Ulama Sunan Giri University
          </span>
          , I have a great interest in web development and am committed to
          turning innovative ideas into reality. My academic background has
          given me a deep understanding of web development principles and a
          strong foundation in technologies such as HTML, CSS, and Javascript.
          For frameworks, I often use React, Express, and Tailwind (CSS).
        </p>
      </div>
    </div>
  );
};

export default About;
