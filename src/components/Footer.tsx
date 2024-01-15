import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="footer overflow-hidden mt-5">
      <p className="text-center text-white">
        <i className="bi bi-c-circle me-1"></i>Copyright {2023} -{" "}
        {new Date().getFullYear()}. Creado por <b>DD`Dev</b> &{" "}
        <b>_excels.or_</b>
      </p>
    </footer>
  );
};

/* type SocialLinkTypes = {
  name: string;
  href: string;
}; */

/* export const SocialLink: FC<SocialLinkTypes> = ({ name, href }) => {
  return (
    <article className="social-link-article mx-3">
      <a href={href} target="_blank">
        <i className={`bi bi-${name.toLocaleLowerCase()}`}></i>
        <span className="social-link-article-text">{name}</span>
      </a>
    </article>
  );
}; */

export default Footer;
