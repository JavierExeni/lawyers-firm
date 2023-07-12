// icons
import { BsCircleFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { GoLaw } from "react-icons/go";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

function Services() {
  return (
    <section className="border-b border-gray-200" id="services">
      <div className="max-w-view-screen mx-auto py-[150px]">
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center gap-2 mb-5 text-secondary"
        >
          <BsCircleFill size="0.4rem" />
          <span>Servicios</span>
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center justify-between"
        >
          <h1 className="text-5xl font-bold">Nuestras Especialidades</h1>
          <a
            href="/"
            className="max-w-lg border border-gray-300 px-5 py-2 rounded-full font-semibold inline-flex items-center gap-3 transition-all duration-500 hover:text-primary hover:border-primary"
          >
            <span>Ver Todas</span>
            <BsArrowRight />
          </a>
        </motion.div>
        {/* Cards services */}
        <div className="grid grid-cols-3 gap-16 mt-16">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-[#f9f9f9] p-10"
          >
            <div className="mb-16">
              <GoLaw size="6rem" />
            </div>
            <h2 className="font-semibold text-2xl mb-3">Materia Municipal</h2>
            <p className="leading-7 mb-10">
              Procesos de Expropiación, afectación y otros, Servidumbres y
              procesos por patentes municipales, urbanizaciones, nuevas
              construcciones, edificios, remodelaciones, divisiones,
              particiones, fraccionamiento
            </p>
            <a className="flex items-center gap-2 font-semibold hover:text-primary transition-all duration-500" href="/">
              <span>Ver más</span>
              <FiArrowUpRight size="1rem" />
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-[#f9f9f9] p-10"
          >
            <div className="mb-16">
              <AiFillEdit size="6rem" />
            </div>
            <h2 className="font-semibold text-2xl mb-3">Materia Municipal</h2>
            <p className="leading-7 mb-10">
              Procesos de Expropiación, afectación y otros, Servidumbres y
              procesos por patentes municipales, urbanizaciones, nuevas
              construcciones, edificios, remodelaciones, divisiones,
              particiones, fraccionamiento
            </p>
            <a className="flex items-center gap-2 font-semibold hover:text-primary transition-all duration-500" href="/">
              <span>Ver más</span>
              <FiArrowUpRight size="1rem" />
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-[#f9f9f9] p-10"
          >
            <div className="mb-16">
              <FaUserTie size="6rem" />
            </div>
            <h2 className="font-semibold text-2xl mb-3">Materia Municipal</h2>
            <p className="leading-7 mb-10">
              Procesos de Expropiación, afectación y otros, Servidumbres y
              procesos por patentes municipales, urbanizaciones, nuevas
              construcciones, edificios, remodelaciones, divisiones,
              particiones, fraccionamiento
            </p>
            <a className="flex items-center gap-2 font-semibold hover:text-primary transition-all duration-500" href="/">
              <span>Ver más</span>
              <FiArrowUpRight size="1rem" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;
