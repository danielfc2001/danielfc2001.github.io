import { FC, ReactElement } from "react";
/* import { useLocation } from "react-router-dom"; */
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

/* type HeaderLinksType = {
  name: string;
  tabIndex: number;
}; */

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

/* export const HeaderLink: FC<HeaderLinksType> = ({ name, tabIndex }) => {
  const [linkActive, setLinkActive] = useState<string>("");
  const location = useLocation();
  useEffect(() => {
    if (location.hash.includes(name)) {
      setLinkActive("active");
    } else {
      setLinkActive("");
    }
  }, [location]);
  return (
    <li className={`main-nav-item nav-item ${linkActive} px-4`}>
      <a href={`/${name}`} className="nav-link">
        <i
          className={`bi bi-${tabsNames[tabIndex].icon} me-1`}
          aria-hidden={true}
        ></i>
        <span>{tabsNames[tabIndex].title}</span>
      </a>
    </li>
  );
}; */

export default Header;
