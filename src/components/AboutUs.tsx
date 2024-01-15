import React, { FC, ForwardedRef } from "react";
import "./aboutUs.css";
import { ScrollSpy } from "./ScrollSpy/ScrollSpy";
import EmailContact from "./EmailContact";

const AboutUs: FC = () => {
  return (
    <section className="about-us-container position-relative overflow-x-hidden mx-0">
      <div className="d-block d-lg-flex justify-content-between align-items-stretch">
        <div className="about-us-img-container">
          <AboutUsImage src="https://danielfc2001.github.io/assets/pngegg.png" />
          <span className="about-us-skill">FullStack Dev</span>
          <div className="about-us-social-links">
            <AboutMeSocialLink
              target="github"
              href="https://github.com/DanielFC2001"
            />
            <AboutMeSocialLink
              target="linkedin"
              href="www.linkedin.com/in/daniel-fundora-crespo-35a7602aa"
            />
            <AboutMeSocialLink target="whatsapp" href="#" />
          </div>
        </div>
        <AboutUsTextBlock />
      </div>
      <ScrollSpy>
        <SeeMoreAboutUsTab to="#learned" ref={React.createRef()} />
      </ScrollSpy>
    </section>
  );
};

const AboutUsTextBlock: FC = () => {
  return (
    <div className="about-us-text-block">
      <h1 className="about-us-first-header">Hola, soy Daniel Fundora.</h1>
      <h1 className="about-us-header text-white">
        Tengo 23 años y desde hace 4 años estudio programación, enfocándome en
        el desarrollo de cara al servidor.
      </h1>
      <EmailContact
        email="danielfundorc@gmail.com"
        copyBtn={true}
        linkBtn={true}
      />
    </div>
  );
};

type AboutMeSocialLinkTypes = {
  target: string;
  href: string;
};

const AboutMeSocialLink: FC<AboutMeSocialLinkTypes> = ({ target, href }) => {
  return (
    <a className="text-white text-decoration-none" href={href}>
      <i className={`bi bi-${target} me-2`}></i>
      <span>DanielFC2001</span>
    </a>
  );
};

type AboutUsImageType = {
  src: string;
};

const AboutUsImage: FC<AboutUsImageType> = ({ src }) => {
  return <img src={src} className="about-us-image"></img>;
};

type SeeMoreAboutUsTabType = {
  to: string;
  ref: ForwardedRef<HTMLAnchorElement> | undefined;
};

const SeeMoreAboutUsTab: FC<SeeMoreAboutUsTabType> = React.forwardRef(
  ({ to }, ref) => {
    return (
      <a href={to} ref={ref}>
        <span className="scroll-next-link">
          <i className="d-block bi bi-caret-down-fill"></i>
          Ver mas acerca de mi
        </span>
      </a>
    );
  }
);

export default AboutUs;
