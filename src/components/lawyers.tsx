// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// icons
import { BsCircleFill } from "react-icons/bs";

function Lawyers() {
  return (
    <section className="border-b border-gray-200" id="lawyers">
      <div className="max-w-view-screen mx-auto py-[150px]">
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center gap-2 mb-5"
        >
          <BsCircleFill size="0.4rem" />
          <span>Abogados</span>
        </motion.p>
        <motion.h1
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-5xl font-bold"
        >
          Nuestros Profesionales
        </motion.h1>

        <div className="flex justify-between items-center mt-14">
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer1 group"
          >
            <h3 className="text-white absolute bottom-0 opacity-0 left-[30px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-5 line-clamp-1">
              Kevin Wilfredo Beltran Jimenez
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer2 group"
          >
            <h3 className="text-white absolute bottom-0 opacity-0 left-[30px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-5 line-clamp-1">
              David Toro Canedo
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer3 group"
          >
            <h3 className="text-white absolute bottom-0 opacity-0 left-[30px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-5 line-clamp-1">
              María José Mustafa Rivera
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer4 group"
          >
            <h3 className="text-white absolute bottom-0 opacity-0 left-[30px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-5 line-clamp-1">
              Jeshua Enrriquez Mejia
            </h3>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer5 group"
          >
            <h3 className="text-white absolute bottom-0 opacity-0 left-[30px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-5 line-clamp-1">
              Edgar Salazar
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer6 group"
          >
            <h3 className="text-white absolute bottom-0 opacity-0 left-[30px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-5 line-clamp-1">
              William Alejandro Sanchez Peña Cruz
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer7 group"
          >
            <h3 className="text-white absolute bottom-0 opacity-0 left-[30px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-5 line-clamp-1">
              Stephanie Sanchez Peña Kushida
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer8 group"
          >
            <h3 className="text-white absolute bottom-0 opacity-0 left-[30px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-5 line-clamp-1">
              William Sanchez Peña Carrafa
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Lawyers;
