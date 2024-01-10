import React, { FC, ForwardedRef, useEffect } from "react";
import "./aboutUs.css";
import { ScrollSpy } from "./ScrollSpy/ScrollSpy";
import { Tooltip } from "bootstrap";
import AboutUsSkillCard from "./AboutUsSkillCard";

const AboutUs: FC = () => {
  return (
    <section className="about-us-container position-relative overflow-x-hidden mx-0">
      <div className="d-block d-lg-flex justify-content-between align-items-stretch">
        <div className="about-us-img-container">
          <AboutUsImage src="https://danielfc2001.github.io/dd-dev-profile/assets/JPG.jpg" />
          <div className="translate-middle about-us-image-text px-4 py-2">
            <p>Daniel Fundora Crespo</p>
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
  useEffect(() => {
    const tooltipSendBtn = document.getElementById("btn_email_send_tooltip");
    const tooltipCopyBtn = document.getElementById("btn_email_copy_tooltip");
    new Tooltip(tooltipSendBtn ? tooltipSendBtn : "", {
      customClass: "tooltip-btn-email",
    });
    new Tooltip(tooltipCopyBtn ? tooltipCopyBtn : "", {
      customClass: "tooltip-btn-email",
    });
  }, []);
  return (
    <div className="about-us-text-block">
      <h1 className="about-us-first-header text-white">Hola ;)</h1>
      <h1 className="about-us-header text-white">
        Soy Daniel, desde hace 4 años estudio programación, enfocándome en el
        desarrollo de cara al servidor.
      </h1>
      <section className="about-us-skills">
        <AboutUsSkillCard
          skill="Frontend"
          usedLenguageIcon="javascript"
          useTecIcon="react"
        />
        <AboutUsSkillCard
          skill="Backend"
          usedLenguageIcon="javascript"
          useTecIcon="nodejs"
        />
        <AboutUsSkillCard skill="Desktop" usedLenguageIcon="go" />
      </section>
      <section className="d-flex justify-content-between email-contact align-items-center">
        <i className="bi bi-envelope-at-fill text-white fs-4 me-4"></i>
        <input
          id="emailContactInput"
          type="text"
          value={"danielfundorc@gmail.com"}
          className="email-contact-input me-4"
          disabled
        />
        <button
          id="btn_email_copy_tooltip"
          type="button"
          className="email-contact-btn me-4"
          data-bs-toggle="tooltip"
          data-bs-title="Copy !"
        >
          <i className="bi bi-copy"></i>
        </button>
        <button
          id="btn_email_send_tooltip"
          type="button"
          className="email-contact-btn"
          data-bs-toggle="tooltip"
          data-bs-title="Send Email !"
        >
          <i className="bi bi-send"></i>
        </button>
      </section>
      <div className="about-us-social-links">
        <AboutMeSocialLink target="github" href="#" />
        <AboutMeSocialLink target="linkedin" href="#" />
        <AboutMeSocialLink target="whatsapp" href="#" />
      </div>
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
