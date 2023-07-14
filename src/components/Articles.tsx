// images
import article1 from "../assets/articles/article1.jpg";
import article2 from "../assets/articles/article2.jpg";
import article3 from "../assets/articles/article3.jpg";
import article4 from "../assets/articles/article4.jpg";
import avatar from "../assets/articles/avatar-michelle.jpg";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// icons
import {
  BsCircleFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
function Articles() {
  let [open, setOpen] = useState(false);

  return (
    <section className="border-b border-gray-200">
      <div className="max-w-view-screen mx-auto py-[150px]">
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center gap-2 mb-5 text-secondary"
        >
          <BsCircleFill size="0.4rem" />
          <span>Noticias</span>
        </motion.p>
        <motion.h1
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-5xl font-bold"
        >
          Nuestros Articulos
        </motion.h1>
        <div className="grid gap-20 justify-center lg:grid-cols-2 lg:gap-20 mt-14">
          <motion.article
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="article-card"
          >
            <div className="img-box">
              <img src={article1} alt="" className="article-banner" />
            </div>

            <div className="article-content">
              <a href="#">
                <h3 className="article-title">
                  Ley excepcional de arrendamiento: consideraciones a ser
                  tomadas en cuenta.
                </h3>
              </a>

              <p className="article-text">
                Mediante Ley N° 1342 de fecha 27 de agosto de 2020, se promulgó
                la Ley Excepcional de Arrendamiento, conocida popularmente como
                la Ley de Alquileres.
              </p>

              <div className="acticle-content-footer">
                <div className="author">
                  <img src={avatar} alt="" className="author-avater" />

                  <div className="author-info">
                    <a href="#">
                      <h4 className="author-name">Michelle Appleton</h4>
                    </a>
                    <div className="publish-date">28 Jun 2023</div>
                  </div>
                </div>

                <div className="share">
                  <button
                    className={`share-button ${open ? "active" : ""}`}
                    onClick={() => setOpen(!open)}
                  >
                    <FiArrowUpRight size="1rem" />
                  </button>

                  <div className={`share-option ${open ? "active" : ""}`}>
                    <span>Compartir</span>

                    <a className="text-white" href="#">
                      <BsFacebook />
                    </a>
                    <a className="text-white" href="#">
                      <BsInstagram />
                    </a>
                    <a className="text-white" href="#">
                      <BsTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
          <motion.article
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="article-card"
          >
            <div className="img-box">
              <img src={article2} alt="" className="article-banner" />
            </div>

            <div className="article-content">
              <a href="#">
                <h3 className="article-title">
                  Posponer el registro de tu marca; una apuesta muy arriesgada.
                </h3>
              </a>

              <p className="article-text line-clamp-4">
                Hemos visto y leído bastante sobre cómo las personas y los
                negocios fueron reinventándose para mantenerse de pie durante la
                pandemia. El desempleo se convirtió en la realidad de muchos, a
                causa de la desocupación y el tiempo en casa tuvo como
                consecuencia la incubación y despegue -en tiempo récord- de
                muchos emprendimientos, talentos culinarios, habilidades
                manuales (empaques, plantas, indumentaria), creación de
                aplicaciones móviles y todo tipo de micronegocios que se fueron
                formando en tiempos de Covid19.
              </p>

              <div className="acticle-content-footer">
                <div className="author">
                  <img src={avatar} alt="" className="author-avater" />

                  <div className="author-info">
                    <a href="#">
                      <h4 className="author-name">Michelle Appleton</h4>
                    </a>
                    <div className="publish-date">28 Jun 2023</div>
                  </div>
                </div>

                <div className="share">
                  <button
                    className={`share-button ${open ? "" : ""}`}
                    onClick={() => setOpen(!open)}
                  >
                    <FiArrowUpRight size="1rem" />
                  </button>

                  <div className={`share-option ${open ? "" : ""}`}>
                    <span>Share</span>

                    <a className="text-white" href="#">
                      <BsFacebook />
                    </a>
                    <a className="text-white" href="#">
                      <BsInstagram />
                    </a>
                    <a className="text-white" href="#">
                      <BsTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
          <motion.article
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="article-card"
          >
            <div className="img-box">
              <img src={article3} alt="" className="article-banner" />
            </div>

            <div className="article-content">
              <a href="#">
                <h3 className="article-title">
                  Retiro parcial o total condicionado y anticipado de
                  jubilación.
                </h3>
              </a>

              <p className="article-text line-clamp-4">
                La normativa vigente de seguridad social establece que los
                Asegurados Dependientes e Independientes, (en adelante
                Asegurados) en los entes gestores de la Seguridad Social a Largo
                Plazo, (en adelante AFP's) durante su vida laboral están
                obligados a realizar aportes monetarios mensuales con la
                finalidad de tener una pensión mensual de jubilación por vejez
                digna, cuando por la edad o salud se encuentren impedidos de
                poder trabajar y por ende dejen de recibir un salario mensual.
                Dichos aportes podrán ser dispuestos para solventar sus gastos
                médicos, alimenticios y de vivienda principalmente.
              </p>

              <div className="acticle-content-footer">
                <div className="author">
                  <img src={avatar} alt="" className="author-avater" />

                  <div className="author-info">
                    <a href="#">
                      <h4 className="author-name">Michelle Appleton</h4>
                    </a>
                    <div className="publish-date">28 Jun 2023</div>
                  </div>
                </div>

                <div className="share">
                  <button
                    className={`share-button ${open ? "" : ""}`}
                    onClick={() => setOpen(!open)}
                  >
                    <FiArrowUpRight size="1rem" />
                  </button>

                  <div className={`share-option ${open ? "" : ""}`}>
                    <span>Share</span>

                    <a className="text-white" href="#">
                      <BsFacebook />
                    </a>
                    <a className="text-white" href="#">
                      <BsInstagram />
                    </a>
                    <a className="text-white" href="#">
                      <BsTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
          <motion.article
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="article-card"
          >
            <div className="img-box">
              <img src={article4} alt="" className="article-banner" />
            </div>

            <div className="article-content">
              <a href="#">
                <h3 className="article-title">
                  Cláusulas y práctica comerciales en contratos de preventa de
                  inmuebles.
                </h3>
              </a>

              <p className="article-text line-clamp-4">
                El Gobierno Nacional dado a conocer el Decreto Supremo No. 4732
                (en adelante, el “Decreto 4732”) y su reglamento, normativa que
                contiene disposiciones que tienen por objeto regular la
                presencia de cláusulas y prácticas comerciales abusivas en los
                contratos de venta futura, venta con reserva de propiedad y
                otras modalidades de contratos de preventa de bienes inmuebles,
                esto amparados en la Ley No. 453 sobre los Derechos de las
                Usuarias y los Usuarios de las Consumidoras y los Consumidores.
              </p>

              <div className="acticle-content-footer">
                <div className="author">
                  <img src={avatar} alt="" className="author-avater" />

                  <div className="author-info">
                    <a href="#">
                      <h4 className="author-name">Michelle Appleton</h4>
                    </a>
                    <div className="publish-date">28 Jun 2023</div>
                  </div>
                </div>

                <div className="share">
                  <button
                    className={`share-button ${open ? "" : ""}`}
                    onClick={() => setOpen(!open)}
                  >
                    <FiArrowUpRight size="1rem" />
                  </button>

                  <div className={`share-option ${open ? "" : ""}`}>
                    <span>Share</span>

                    <a className="text-white" href="#">
                      <BsFacebook />
                    </a>
                    <a className="text-white" href="#">
                      <BsInstagram />
                    </a>
                    <a className="text-white" href="#">
                      <BsTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Articles;
