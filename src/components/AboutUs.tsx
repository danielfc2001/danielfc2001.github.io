import { FC } from "react";
import "./aboutUs.css";

const AboutUs: FC = () => {
  return (
    <section className="position-relative vh-100 overflow-x-hidden py-5 mx-0">
      <div className="d-block d-lg-flex justify-content-between align-items-stretch">
        <div className="about-us-img-container">
          <AboutUsImage src="./src/assets/JPG.jpg" />
          <div className="translate-middle about-us-image-text p-4">
            <p>Daniel Fundora</p>
          </div>
        </div>
        <AboutUsTextBlock />
      </div>
      <span
        className="position-absolute d-none d-lg-block w-100 start-50 translate-middle text-center text-white"
        style={{ top: "78%" }}
      >
        Ver mas acerca de mi
        <i className="d-block bi bi-caret-down-fill"></i>
      </span>
    </section>
  );
};

const AboutUsTextBlock: FC = () => {
  return (
    <div className="about-us-text-block">
      <h1 className="about-us-header text-white">
        Hola mi nombre es Daniel y estudio desarrollo de software desde hace
        aproximadamente 4 años.
      </h1>
      <h3 className="about-us-subHeader text-white">
        El campo del desarrollo en el cual más e indagado es la Web, usando el
        lenguaje de programación JavaScript en un entorno fullstack a travéz del
        entorno de NodeJs.
      </h3>
      <p className="about-us-text mt-3">
        Actualmente me encuentro en busca de una oportunidad de crecimiento
        profesional, en frontend o backend, para demostrar los conocimientos
        adquiridos al tener por seguro el poder aportar ayuda en el campo a mi
        contratante. También me encuentro en una fase de desarrollo de proyectos
        tanto para este portafolio como para mi crecimiento personal.
      </p>
    </div>
  );
};

type AboutUsImageType = {
  src: string;
};

const AboutUsImage: FC<AboutUsImageType> = ({ src }) => {
  return <img src={src} className="about-us-image"></img>;
};

export default AboutUs;
