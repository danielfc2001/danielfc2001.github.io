import { FC } from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer border-top border-white overflow-hidden mt-5">
      <h4 className="text-center text-white my-4">MIS CONTACTOS</h4>
      <section className="social-links-container">
        <SocialLink name="Whatsapp" href="#" />
        <SocialLink name="Instagram" href="#" />
        <SocialLink name="Facebook" href="#" />
        <SocialLink name="Linkedin" href="#" />
        <SocialLink name="GitHub" href="#" />
      </section>
      <p className="footer-copyright-text">
        <i className="bi bi-c-circle me-1"></i>Copyright {2023} - {2023}. Creado
        por <b>DD`Dev</b> & <b>_excels.or_</b>
      </p>
    </footer>
  );
};

type SocialLinkTypes = {
  name: string;
  href: string;
};

export const SocialLink: FC<SocialLinkTypes> = ({ name, href }) => {
  return (
    <article className="social-link-article mx-3">
      <a href={href} target="_blank">
        <i className={`bi bi-${name.toLocaleLowerCase()}`}></i>
        <span className="social-link-article-text">{name}</span>
      </a>
    </article>
  );
};

export default Footer;
