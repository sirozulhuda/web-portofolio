import logo from "../assets/img/logo.png";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const handleSocialClick = (socialMedia) => {
    switch (socialMedia) {
      case "instagram":
        window.open("https://www.instagram.com/sirozulhd", "_blank");
        break;
      case "facebook":
        window.open("https://www.facebook.com/sirozulhuda", "_blank");
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/sirozul-huda", "_blank");
        break;
      case "whatsapp":
        // Misalnya, membuka aplikasi WhatsApp di desktop
        window.open(
          "https://web.whatsapp.com/send?phone=083892718107",
          "_blank"
        );
        break;
      case "github":
        window.open("https://github.com/sirozulhuda", "_blank");
        break;
      case "tiktok":
        window.open("https://www.tiktok.com/@kakaknyarafathar08", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto mt-24">
      <div className="flex justify-between items-center bg-primary p-1 md:p-2">
        <img src={logo} alt="Logo Image" className="w-12 md:w-[60px]" />

        <div className="flex justify-around gap-2 md:gap-6 text-white ml-8">
          <FaInstagram
            size={20}
            className="hover:scale-105 transition-all ease-out duration-100"
            onClick={() => handleSocialClick("instagram")}
          />
          <FaLinkedin
            size={20}
            className="hover:scale-105 transition-all ease-out duration-100"
            onClick={() => handleSocialClick("linkedin")}
          />
          <FaFacebook
            size={20}
            className="hover:scale-105 transition-all ease-out duration-100"
            onClick={() => handleSocialClick("facebook")}
          />
          <FaTiktok
            size={20}
            className="hover:scale-105 transition-all ease-out duration-100"
            onClick={() => handleSocialClick("tiktok")}
          />
          <FaWhatsapp
            size={20}
            className="hover:scale-105 transition-all ease-out duration-100"
            onClick={() => handleSocialClick("whatsapp")}
          />
          <FaGithub
            size={20}
            className="hover:scale-105 transition-all ease-out duration-100"
            onClick={() => handleSocialClick("github")}
          />
        </div>
        <p className="text-white font-light text-xs ml-14 md:text-sm md:ml-8">
          @2024 Copyright. All Right Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
