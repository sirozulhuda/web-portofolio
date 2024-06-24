import contactImg from "../assets/img/contact-img.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="max-w-screen-2xl mt-20 mb-20" id="contact">
      <h1 className="font-bold text-xl text-center text-black underline mb-10">
        Contact Me
      </h1>
      <div
        className="flex flex-row md:flex-row justify-center items-center px-4 lg:px-24 py-4 lg:py-12 space-y-4 md:space-y-2 lg:space-x-6 bg-transparent border-4 border-primary rounded-xl mx-6 md:mx-28 lg:mx-72"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={contactImg}
          alt="contact-image"
          className="w-[180px] lg:w-[280px] mb-4 md:mb-0"
        />
        <div className="flex flex-col justify-center items-center w-full lg:w-auto ml-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const name = form.name.value;
              const email = form.email.value;
              const message = form.message.value;
              window.location.href = `mailto:sirozulhuda18@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
            }}
            className="w-full md:w-auto flex flex-col items-center"
          >
            <div className="input-with-icon mb-2 md:mb-4 w-full md:w-[280px] h-[40px] ">
              <i className="fas fa-user icon"></i>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="w-full h-full px-4 rounded-xl bg-[#D9D9D9] shadow-lg"
                required
              />
            </div>
            <div className="input-with-icon mb-2 md:mb-4 w-full md:w-[280px] h-[40px] ">
              <i className="fas fa-envelope icon"></i>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full h-full px-4 rounded-xl bg-[#D9D9D9] shadow-lg"
                required
              />
            </div>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Message..."
              className="mb-2 md:mb-4 w-full md:w-[280px] h-[90px] md:h-[120px] px-4 rounded-xl bg-[#D9D9D9] shadow-lg"
              required
            />
            <button
              className="bg-primary text-white text-sm mt-2 md:mt-4 font-semibold px-6 py-2 rounded-2xl hover:opacity-70 w-full"
              type="submit"
            >
              Submit!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
