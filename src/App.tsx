import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import { LinkWithScrollSpy, ScrollSpy } from "./components/ScrollSpy/ScrollSpy";
import Footer from "./components/Footer";
import { GlobalProvider } from "./context/globalContext";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "devicon/devicon-base.css";
import "devicon/devicon.min.css";
import useNavigationObserver from "./hooks/useNavigationObserver";
import Container from "./components/Container";

const App = () => {
  const { objectObserved } = useNavigationObserver();

  return (
    <GlobalProvider>
      <div className="main container">
        <div className="mobile-brand">
          <span className="text-white">DD`Dev</span>
        </div>
        <Header>
          <>
            <a className="brand navbar-brand ms-5" href="#">
              <span>DD`Dev</span>
            </a>
            <ul className="navbar-header-nav navbar-nav ms-auto">
              <ScrollSpy>
                <LinkWithScrollSpy
                  target="about"
                  to="#about"
                  active={objectObserved === "about" ? true : false}
                  ref={React.createRef()}
                >
                  <i className="bi bi-file-earmark-person me-1"></i>
                  <span>Acerca de mi</span>
                </LinkWithScrollSpy>
                <LinkWithScrollSpy
                  target="projects"
                  to="#projects"
                  active={objectObserved === "projects" ? true : false}
                  ref={React.createRef()}
                >
                  <i className="bi bi-file-earmark-code-fill me-1"></i>
                  <span>Proyectos</span>
                </LinkWithScrollSpy>
                <LinkWithScrollSpy
                  target="learned"
                  to="#learned"
                  active={objectObserved === "learned" ? true : false}
                  ref={React.createRef()}
                >
                  <i className="bi bi-code-slash me-1"></i>
                  <span>Aprendido</span>
                </LinkWithScrollSpy>
              </ScrollSpy>
            </ul>
          </>
        </Header>
        <div className="container">
          <section id="about">
            <AboutUs />
          </section>
          <Container title="Proyectos" target="projects" />
          <Container title="Habilidades" target="learned" />
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  );
};

export default App;
