import cardImg1 from "../assets/img/card-1.png";
import cardImg2 from "../assets/img/card-2.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto mt-28 mb-20" id="projects">
      <h1 className="text-center font-bold text-xl underline mb-12 md:mb-16">
        MyProjects
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2 lg:px-14"
        id="projects"
      >
        {/* Card 1 */}
        <div
          className="flex flex-col justify-center items-center bg-primary text-white p-4 mx-12 shadow-xl rounded-lg hover:-translate-y-4 transition-all ease-in-out duration-150 lg:p-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={cardImg1}
            alt="Card Image 1"
            className="w-[300px] md:w-[500px]"
          />
          <h2 className="text-xl font-medium mt-2 mb-2 lg:mr-44 md:font-semibold">
            Meatball Sales Landing Page.
          </h2>
          <ul className="list-disc text-[10px] font-extralight px-2 lg:text-xs lg:font-light">
            <li>Created using React framework and Tailwind CSS.</li>
            <li>
              Creating a landing page for online meatball sales with the aim of
              increasing sales and expanding the market.
            </li>
            <li>Integrate online order form.</li>
          </ul>
        </div>
        {/* Card 2*/}
        <div
          className="flex flex-col justify-center items-center bg-primary text-white p-4 mx-12 shadow-xl rounded-lg hover:-translate-y-4 transition-all ease-in-out duration-150 md:p-6"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img
            src={cardImg2}
            alt="Card Image 1"
            className="w-[300px] md:w-[500px]"
          />
          <h2 className="text-xl font-medium mt-2 mb-2 px-2 lg:mr-44 md:font-semibold">
            Money Tracker Mobile App.
          </h2>
          <ul className="list-disc text-[10px] font-extralight px-2 lg:text-xs lg:font-light">
            <li>
              Developed a mobile application to help users record and manage
              their expenses and income.
            </li>
            <li>Using Dart programming language and Flutter framework.</li>
            <li> Integrating MySQL Database Management System.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
