import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import { LinkWithScrollSpy, ScrollSpy } from "./components/ScrollSpy/ScrollSpy";
import LearnContainer from "./components/LearnContainer";
import ProjectsContainer from "./components/ProjectsContainer";
import Footer from "./components/Footer";
import CertificatesContainer from "./components/CertificatesContainer";
import { GlobalProvider } from "./context/globalContext";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container mt-4 px-0">
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
                  ref={React.createRef()}
                >
                  <i className="bi bi-file-earmark-person me-1"></i>
                  <span>About Me</span>
                </LinkWithScrollSpy>
                <LinkWithScrollSpy
                  target="learned"
                  to="#learned"
                  ref={React.createRef()}
                >
                  <i className="bi bi-code-slash me-1"></i>
                  <span>Learned</span>
                </LinkWithScrollSpy>
                <LinkWithScrollSpy
                  target="projects"
                  to="#projects"
                  ref={React.createRef()}
                >
                  <i className="bi bi-file-earmark-code-fill me-1"></i>
                  <span>Projects</span>
                </LinkWithScrollSpy>
                <LinkWithScrollSpy
                  target="certificates"
                  to="#certificates"
                  ref={React.createRef()}
                >
                  <i className="bi bi-patch-check-fill me-1"></i>
                  <span>Certificates</span>
                </LinkWithScrollSpy>
              </ScrollSpy>
            </ul>
          </>
        </Header>
        <div className="container">
          <section id="about">
            <AboutUs />
          </section>
          <section id="learned">
            <LearnContainer />
          </section>
          <section id="projects">
            <ProjectsContainer />
          </section>
          <section id="certificates">
            <CertificatesContainer />
          </section>
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  );
};

export default App;
