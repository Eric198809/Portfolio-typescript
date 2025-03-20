import { useState, useEffect } from "react";
import "../style/header.scss";

const Header: React.FC = () => {
  const languages: string[] = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "NextJS",
    "TypeScript",
    "Node.js",
    "Front", "Back", "Fullstack",
  ];

  const [currentLanguage, setCurrentLanguage] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * languages.length);
      setCurrentLanguage(languages[randomIndex]);
    }, 1500);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [languages]);

  return (
    <>
      <header style={{ padding: "0px 10px" }}>
        <span className="alternative_header_title">
          Bienvenue sur mon portfolio
        </span>
        <h1>
          Eric Besson | Développeur web <br />
          <span style={{ color: "#575eff" }}>{currentLanguage}</span>
        </h1>
        <img
          className="cercle_gauche"
          src="/cercleHeadergauche.svg"
          alt="cercle"
        />

        <div className="headers_buttons">
          <div className="bouton">
            <a href="https://www.linkedin.com/in/eric-besson-517763123/">
              Linkedin
            </a>
            <img src="/icons/linkedin.svg" alt="Logo Linkedin" />
          </div>
          <div className="bouton">
            <a href="https://www.linkedin.com/in/eric-besson-517763123/">
              Github
            </a>
            <img src="/icons/github.svg" alt="Logo Github" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
