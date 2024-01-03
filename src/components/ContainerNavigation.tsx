import { FC } from "react";
import { LearnNavigationTypes } from "./Types";
import "./containerNavigation.css";

const ContainerNavigation: FC<LearnNavigationTypes> = ({ children }) => {
  return <nav className="nav nav-pills nav-justified">{children}</nav>;
};

export default ContainerNavigation;
