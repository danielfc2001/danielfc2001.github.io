import { FC, ReactNode, createContext, useState } from "react";

export type IGlobal = {
  theme: string;
  learnActiveNav: number;
  projectActiveNav: number;
  certificatesActiveNav: number;
  updateTheme: (colorTheme: string) => void;
  updateLearnNav: (nav: number) => void;
  updateProjectsNav: (nav: number) => void;
  updateCertificatesNav: (nav: number) => void;
};

interface Props {
  children: ReactNode;
}

export const GlobalContext = createContext<IGlobal | null>(null);

export const GlobalProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");
  const [learnActiveNav, setLearnActiveNav] = useState<number>(0);
  const [projectActiveNav, setProjectActiveNav] = useState<number>(1);
  const [certificatesActiveNav, setCertificatesActiveNav] = useState<number>(0);
  const updateTheme = (colorTheme: string) => {
    setTheme(colorTheme);
  };
  const updateLearnNav = (nav: number) => {
    setLearnActiveNav(nav);
  };
  const updateProjectsNav = (nav: number) => {
    setProjectActiveNav(nav);
  };
  const updateCertificatesNav = (nav: number) => {
    setCertificatesActiveNav(nav);
  };
  return (
    <GlobalContext.Provider
      value={{
        theme,
        learnActiveNav,
        projectActiveNav,
        certificatesActiveNav,
        updateTheme,
        updateLearnNav,
        updateProjectsNav,
        updateCertificatesNav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
