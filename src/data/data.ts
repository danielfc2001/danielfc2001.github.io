type LenguagesTypes = {
    title: string,
    img: string,
}

export const LENGUAGES: LenguagesTypes[] = [
    {
        title: "Javascript",
        img: "javascript",
      },
      {
        title: "Typescript",
        img: "typescript",
      },
      {
        title: "Python",
        img: "python",
      },
      {
        title: "Golang",
        img: "go",
      },
      {
        title: "React",
        img: "react",
      },
      {
        title: "NodeJs",
        img: "nodejs",
      },
      {
        title: "GitHub",
        img: "github",
      },
]

export const PROJECTS = [
  {
    title: "Url Shortener Project",
    description:
      "Sistema de acortado de urls. Con autenticación integrada, analíticas para los enlaces que tenga el usuario almacenado. Generación de códigos QR.",
    progress: 50,
    img: "https://danielfc2001.github.io/assets/project_swifturl.png",
    tecs: ["react", "javascript", "nodejs"],
    link: "https://github.com/danielfc2001/url-shortener-web-app",
    demo: "https://swifturl.onrender.com",
  }
];