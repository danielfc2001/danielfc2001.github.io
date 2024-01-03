import { FC, MouseEvent, useContext, useEffect, useState } from "react";
import { LearnNavigationTabsTypes } from "./Types";
import { IGlobal, GlobalContext } from "../context/globalContext";
import "./learnContainer.css";

const ContainerNavigationTab: FC<LearnNavigationTabsTypes> = ({
  name,
  tabName,
  tabIndex,
}) => {
  const {
    learnActiveNav,
    projectActiveNav,
    certificatesActiveNav,
    updateLearnNav,
    updateProjectsNav,
    updateCertificatesNav,
  } = useContext(GlobalContext) as IGlobal;

  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    switch (tabName) {
      case "learn":
        if (tabIndex === learnActiveNav) {
          setActive(true);
        } else {
          setActive(false);
        }
        break;
      case "projects":
        if (tabIndex === projectActiveNav) {
          setActive(true);
        } else {
          setActive(false);
        }
        break;
      case "certificates":
        if (tabIndex === certificatesActiveNav) {
          setActive(true);
        } else {
          setActive(false);
        }
        break;
      default:
        break;
    }
  }, [learnActiveNav, projectActiveNav, certificatesActiveNav]);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    switch (tabName) {
      case "learn":
        updateLearnNav(tabIndex);
        break;
      case "projects":
        updateProjectsNav(tabIndex);
        break;
      case "certificates":
        updateCertificatesNav(tabIndex);
        break;
      default:
        break;
    }
  };

  return (
    <a
      href="#"
      className={`nav-link learn-navigation-link ${
        active ? "active" : ""
      } overflow-hidden rounded-0`}
      onClick={handleClick}
    >
      {name}
    </a>
  );
};

export default ContainerNavigationTab;
