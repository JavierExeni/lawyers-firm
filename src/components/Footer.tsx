import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// images
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-black" id="contact">
      <div className="border-b border-gray-200/40">
        <div className="max-w-view-screen mx-auto py-[100px]">
          {/* <h1 className="lg:text-lg text-white">
            <span className="font-bold">Sánchez Peña </span>
            <span>& Asociados</span>
          </h1> */}

          <img className="max-w-[200px]" src={Logo} alt="" />

          <div className="text-white grid grid-cols-[1fr_auto_auto] gap-72 mt-16">
            <div>
              <h3 className="mb-5">CONTACTANOS</h3>
              <h2 className="text-3xl mb-5">contacto@sanchezpabogados.com</h2>
              <p className="text-gray-300 font-extralight leading-7">
                Nuestro objetivo es dar un trato humano y personalizado a
                nuestros clientes y nos preciamos de ser un despacho que atiende
                todo tipo de asuntos, haciéndolo con pasión y eficiencia,
                haciendo nuestros los problemas de nuestros clientes.
              </p>
            </div>
            <div>
              <h3 className="mb-5">EXPLORAR</h3>
              <ul className="flex flex-col gap-3">
                <li className="text-gray-300 font-extralight hover:text-secondary hover:ml-1 transition-all duration-500">
                  <a href="">Inicio</a>
                </li>
                <li className="text-gray-300 font-extralight hover:text-secondary hover:ml-1 transition-all duration-500">
                  <a href="">Firma</a>
                </li>
                <li className="text-gray-300 font-extralight hover:text-secondary hover:ml-1 transition-all duration-500">
                  <a href="">Abogados</a>
                </li>
                <li className="text-gray-300 font-extralight hover:text-secondary transition-all duration-500">
                  <a href="">Especialidades</a>
                </li>
                <li className="text-gray-300 font-extralight hover:text-secondary hover:ml-1 transition-all duration-500">
                  <a href="">Contacto</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5">DIRECCIÓN</h3>
              <p className="text-gray-300 font-extralight">
                1995 Matthews Stree Bloomington, IL. United States
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-view-screen mx-auto py-16 flex items-center justify-between">
        <p className="text-gray-300 font-extralight">
          <span>Copyright Soluciones Digitales 2023</span> <br />
          <span>All rights reserved</span>
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a
              className="p-3 rounded-full border border-white block text-white hover:text-secondary hover:border-secondary transition-all duration-500"
              href=""
            >
              <FaFacebookF size="0.8rem" />
            </a>
          </li>
          <li>
            <a
              className="p-3 rounded-full border border-white block text-white hover:text-secondary hover:border-secondary transition-all duration-500"
              href=""
            >
              <FaInstagram size="0.8rem" />
            </a>
          </li>
          <li>
            <a
              className="p-3 rounded-full border border-white block text-white hover:text-secondary hover:border-secondary transition-all duration-500"
              href=""
            >
              <FaLinkedinIn size="0.8rem" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
