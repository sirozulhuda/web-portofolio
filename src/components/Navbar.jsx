import logo from "../assets/img/logo.png";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { link: "Home", path: "#home" },
    { link: "About", path: "#about" },
    { link: "Projects", path: "#projects" },
    { link: "Contact", path: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll to section with offset
  const handleScroll = (event, path) => {
    event.preventDefault();
    const offset = 70; // Adjust based on your navbar height
    const targetElement = document.querySelector(path);
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    // Close menu if open (for mobile)
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="max-w-screen-2xl fixed top-0 right-0 left-0 bg-primary border-b-2 border-white z-20">
        <div className="flex justify-between items-center mx-4 my-3 md:mx-12">
          <a
            href="/"
            className="flex items-center font-bold text-lg md:text-xl"
          >
            <img src={logo} alt="logo-image" className="w-16" />
            <span className="text-white">sirozul</span>{" "}
            <span className="text-secondary">huda</span>
          </a>
          {/* Mobile Menu */}
          <div className="md:hidden px-5">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? (
                <FaTimes className="w-8 h-8" />
              ) : (
                <FaBars className="w-8 h-8" />
              )}
            </button>
          </div>

          {/* NavItems Desktop (Hidden on Mobile) */}
          <div className="hidden md:flex mr-8">
            <ul className="flex space-x-12 font-semibold text-white text-lg">
              {navItems.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.path}
                    onClick={(e) => handleScroll(e, item.path)}
                    className="hover:text-secondary transition-all duration-200 ease-in-out"
                  >
                    {item.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* NavItems Mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden fixed top-0 right-0 left-0 bg-primary pt-24 pb-5 text-white text-lg font-medium space-y-4 px-4 z-10`}
      >
        {navItems.map(({ link, path }) => (
          <a
            key={link}
            href={path}
            onClick={(e) => handleScroll(e, path)}
            className="block hover:font-semibold"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
