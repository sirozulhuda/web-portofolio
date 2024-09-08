import { useEffect, useState } from "react";
import cardImg1 from "../assets/img/card-1.png";
import cardImg2 from "../assets/img/card-2.png";
import AOS from "aos";

import "aos/dist/aos.css";
import "../App.css";

const Projects = () => {
  const [card1Hover, setCard1Hover] = useState(false);
  const [card2Hover, setCard2Hover] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto mt-28 mb-20" id="projects">
      <h1 className="text-center font-bold text-xl underline mb-12 md:mb-16">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2">
        {/* Card 1 */}
        <div
          className="relative flex flex-col justify-center items-center bg-primary text-white p-1 mx-12 shadow-xl rounded-lg transition-all ease-in-out duration-150 lg:p-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          onMouseEnter={() => setCard1Hover(true)}
          onMouseLeave={() => setCard1Hover(false)}
        >
          {/* Gambar */}
          <img src={cardImg1} alt="Card Image 1" className="w-full" />

          {/* Deskripsi yang akan muncul di hover */}
          <div
            className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-lg transition-opacity duration-300 ${
              card1Hover ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-xs md:text-lg lg:text-xl font-medium mt-2 mb-2 px-2 text-center md:font-semibold">
              SooBakso Landing Page
            </h2>
            <ul className="list-disc text-[8px] font-light px-2 lg:text-sm lg:font-light">
              <li className="mb-2">
                Developed an interactive landing page for a meatball sales
                business using React and Tailwind CSS.
              </li>
              <li className="mb-2">
                Showcased appealing product visuals to attract customer
                interest.
              </li>
              <li className="mb-2">
                Leveraged React’s component-based architecture for a modular and
                scalable development process.
              </li>
              <a
                href="https://github.com/sirozulhuda/soobakso-landingpage"
                className="text-blue-400 underline"
              >
                View Github
              </a>
            </ul>
          </div>
        </div>
        {/* Card 2 */}
        <div
          className="relative flex flex-col justify-center items-center bg-primary text-white p-1 mx-12 shadow-xl rounded-lg transition-all ease-in-out duration-150 lg:p-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          onMouseEnter={() => setCard2Hover(true)}
          onMouseLeave={() => setCard2Hover(false)}
        >
          {/* Gambar */}
          <img src={cardImg2} alt="Card Image 2" className="w-full" />
          {/* Deskripsi yang akan muncul di hover */}
          <div
            className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 rounded-lg transition-opacity duration-300 ${
              card2Hover ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-xs md:text-lg lg:text-xl font-medium mt-2 mb-2 px-2 text-center md:font-semibold">
              Money Tracker Mobile App
            </h2>
            <ul className="list-disc text-[8px] font-light px-2 lg:text-sm lg:font-light">
              <li className="mb-2">
                Developed a mobile application for tracking income and expenses
                using Flutter and MySQL as the DBMS.
              </li>
              <li className="mb-2">
                Provided users with intuitive features to log, categorize, and
                analyze their financial transactions.
              </li>
              <li className="mb-2">
                Implemented a responsive UI with Flutter to ensure a smooth
                experience across various devices.
              </li>
              <a
                href="https://github.com/sirozulhuda/final_project_uas"
                className="text-blue-400 underline"
              >
                View Github
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
