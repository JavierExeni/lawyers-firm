import { useState } from "react";
// icons
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
// import link
import { Link } from "react-scroll";
// images
import Logo from "../assets/logo.png";
// PascalCasing
function Header() {
  let Links = [
    { name: "Inicio", link: "home" },
    { name: "Firma", link: "sign" },
    { name: "Abogados", link: "lawyers" },
    { name: "Especialidades", link: "services" },
    { name: "Contacto", link: "contact" },
  ];

  let [open, setOpen] = useState(false);

  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in z-50 ${
        color ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-view-screen m-auto flex flex-row md:items-center justify-between gap-4 lg:gap-10 p-4">
        <img className="max-w-[170px]" src={Logo} alt="" />
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer md:hidden"
          type="button"
        >
          {open ? (
            <IoMdClose size="1.5rem" />
          ) : (
            <BiMenuAltRight size="1.5rem" />
          )}
        </button>
        <ul
          className={`flex flex-col gap-3 md:flex-row md:gap-8 md:items-center absolute -z-[1] md:z-auto left-0  w-full p-4 bg-gray-100 md:bg-transparent md:static md:w-auto transition-all duration-700 ease-in-out ${
            open ? "top-[56px] opacity-100" : "-top-[500px]"
          } md:opacity-100 opacity-0 `}
        >
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                activeClass="text-primary"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer text-gray-800 hover:text-primary duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
