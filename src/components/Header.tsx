import { FC, ReactElement } from "react";
import "./header.css";

type HeaderComponent = {
  children: ReactElement;
};

const Header: FC<HeaderComponent> = ({ children }) => {
  return (
    <nav
      className="navbar-header navbar sticky-top shadow"
      style={{ borderRadius: "1rem" }}
    >
      {children}
    </nav>
  );
};

type TabNameTypes = {
  title: string;
  icon: string;
};

export const tabsNames: Array<TabNameTypes> = [
  {
    title: "About Me",
    icon: "file-person",
  },
  {
    title: "Learning",
    icon: "code-slash",
  },
  {
    title: "Projects",
    icon: "file-earmark-code-fill",
  },
  {
    title: "Certificates",
    icon: "patch-check-fill",
  },
  {
    title: "Contact",
    icon: "person-lines-fill",
  },
];

export default Header;
