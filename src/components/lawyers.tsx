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
          className="flex items-center gap-2 mb-5 text-secondary"
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
            <div className="h-full rounded-[20px] group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:to-transparent">
              <div className="text-white absolute bottom-0 opacity-0 left-[15px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-6">
                <h3 className=" line-clamp-1">
                  Kevin Wilfredo Beltran Jimenez
                </h3>
                <h3 className="font-extralight">Asistente Jurídico</h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer2 group"
          >
            <div className="h-full rounded-[20px] group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:to-transparent">
              <div className="text-white absolute bottom-0 opacity-0 left-[15px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-6">
                <h3 className=" line-clamp-1">David Toro Canedo</h3>
                <h3 className="font-extralight">Consultor Externo</h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer3 group"
          >
            <div className="h-full rounded-[20px] group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:to-transparent">
              <div className="text-white absolute bottom-0 opacity-0 left-[15px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-6">
                <h3 className=" line-clamp-1"> María José Mustafa Rivera</h3>
                <h3 className="font-extralight">Asociado Junior</h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer4 group"
          >
            <div className="h-full rounded-[20px] group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:to-transparent">
              <div className="text-white absolute bottom-0 opacity-0 left-[15px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-6">
                <h3 className=" line-clamp-1"> Jeshua Enrriquez Mejia</h3>
                <h3 className="font-extralight">Asistente Jurídico</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer5 group"
          >
            <div className="h-full rounded-[20px] group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:to-transparent">
              <div className="text-white absolute bottom-0 opacity-0 left-[15px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-6">
                <h3 className=" line-clamp-1"> Edgar Salazar</h3>
                <h3 className="font-extralight">Asociado Junior</h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer6 group"
          >
            <div className="h-full rounded-[20px] group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:to-transparent">
              <div className="text-white absolute bottom-0 opacity-0 left-[15px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-6">
                <h3 className=" line-clamp-1">
                  William Alejandro Sanchez Peña Cruz
                </h3>
                <h3 className="font-extralight">Asistente Jurídico</h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer7 group"
          >
            <div className="h-full rounded-[20px] group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:to-transparent">
              <div className="text-white absolute bottom-0 opacity-0 left-[15px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-6">
                <h3 className=" line-clamp-1">
                  Stephanie Sanchez Peña Kushida
                </h3>
                <h3 className="font-extralight">Socio</h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lawyer-card bg-lawyer8 group"
          >
            <div className="h-full rounded-[20px] group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:to-transparent">
              <div className="text-white absolute bottom-0 opacity-0 left-[15px] transition-all duration-500 group-hover:opacity-100 group-hover:bottom-6">
                <h3 className=" line-clamp-1"> William Sanchez Peña Carrafa</h3>
                <h3 className="font-extralight">Socio</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Lawyers;
