import { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import heroImg from "../assets/img/hero-img.png";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inisialisasi AOS dengan durasi animasi 1000ms
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "../../public/CV.pdf";
    link.download = "Sirozul_Huda_CV.pdf";
    link.click();
  };

  return (
    <div
      className="max-w-full mx-auto pt-36 md:pt-28 bg-primary pb-16 "
      id="home"
    >
      <div
        className="flex flex-col justify-center items-center lg:flex-row-reverse"
        data-aos="fade-up"
      >
        <div className="lg:pr-28" data-aos="zoom-in">
          <img
            src={heroImg}
            alt="hero-image"
            className="w-[300px] md:w-[500px] lg:w-[900px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center md:items-start md:pl-40">
          <h3
            className="text-white font-regular text-lg mt-2 md:text-2xl md:mt-0"
            data-aos="fade-right"
          >
            Hi, I am
          </h3>
          <h1
            className="text-secondary text-4xl font-bold md:text-5xl md:mb-2"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Sirozul Huda
          </h1>
          <h3
            className="text-white font-semibold text-xl"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Freelancer & Web Developer
          </h3>
          <p
            className="text-center font-light text-xs text-white px-14 mt-2 mb-10 md:text-sm md:px-0 md:text-left md:pr-28"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            Welcome to my portfolio! I am a passionate Web Developer with a
            knack for creating stunning and functional websites. Let`s build
            something great together.
          </p>
          <div
            className="flex flex-row space-x-4 md:justify-end"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <button
              className="bg-white px-3 py-2 text-primary rounded-lg text-sm font-bold hover:bg-secondary hover:text-white"
              onClick={handleContactClick}
            >
              Contact me!
            </button>
            <button
              className="flex items-center bg-transparent px-3 py-2 text-white rounded-lg text-sm font-bold border-2 border-white hover:bg-white hover:text-black"
              onClick={handleDownloadClick}
            >
              <FaDownload className="mr-2" />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
