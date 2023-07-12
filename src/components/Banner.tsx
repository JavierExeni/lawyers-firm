// images
import Image from "../assets/test-image.png";
// icons
import { BsArrowRight } from "react-icons/bs";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

function Banner() {
  return (
    <section className="border-b border-gray-200" id="home">
      <div className="max-w-view-screen m-auto grid grid-cols-2">
        <div className="border-r border-gray-200">
          <div className="grid content-end h-full">
            <div className="px-5 pb-10">
              <h1 className="flex flex-col gap-1 mb-8">
                <motion.span
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-4xl"
                >
                  <TypeAnimation
                    sequence={[
                      "Estudio Jurídico",
                      2000,
                      "Prestigio y Experiencia",
                      2000,
                      "Mejor Solución",
                      2000,
                    ]}
                    speed={50}
                    className="text-accent"
                    wrapper="span"
                    repeat={Infinity}
                  />
                </motion.span>
                <motion.span
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-7xl font-semibold"
                >
                  Sánchez Peña & Asociados
                </motion.span>
              </h1>
              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-8 max-w-[80%] leading-7"
              >
                Es una sociedad de abogados especialistas en las diversas ramas
                del derecho. Asesoramos a personas particulares en sus
                necesidades legales cotidianas, pequeñas y medianas empresas,
                así como a grandes empresas nacionales o extranjeras.
              </motion.p>
              <motion.a
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex items-center gap-3 font-semibold"
                href="/"
              >
                <span>Ver más</span>
                <BsArrowRight />
              </motion.a>
            </div>
          </div>
        </div>
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="grid place-items-center pt-24 pb-10 px-5"
        >
          <img src={Image} alt="" />
        </motion.div>
      </div>
    </section>
  );
}

export default Banner;