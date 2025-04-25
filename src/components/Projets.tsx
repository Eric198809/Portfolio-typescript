import projets from "../json/projets.json";
import "../style/projets.scss";
import ProjetCard2 from "./ProjetsCard2.tsx";
import { useState } from "react";

interface Projet {
  id: number;
  titre: string;
  image: string;
  imageStack: string[];
  website?: string;
  githubLink?: string;
  categorie: string;
  content: string;
  stackDetails: { image: string; techno: string }[];
  details?: string[];
}

const Projets = () => {
  const projetsMenu = ["React", "NextJS", "Javascript", "PHP (wordpress)"];

  const [selectedMenu, setSelectedMenu] = useState<string>("React");


  return (
    <>
      <section className="projets_section">
        <div className="title_section">
          <span className="title_section_line_gauche"></span>
          <h2 className="test">Réalisations</h2>
          <span className="title_section_line_droite"></span>
        </div>

        <div className="all_projets_section">
          <div className="container_projets_menu">
            <ul>
              {projetsMenu.map((menu, index) => (
                <li
                  value={menu}
                  key={index}
                  style={
                    selectedMenu === menu
                      ? { background: "var(--secondary)" }
                      : undefined
                  }
                  onClick={() => setSelectedMenu(menu)}
                >
                  {menu}
                </li>
              ))}
            </ul>

            <div className="all_projets">
              {projets
                .filter((projet: Projet) =>
                  projet.categorie.includes(selectedMenu)
                )
                .map((projet: Projet) => (
                  <ProjetCard2 key={projet.id} projet={projet} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projets;
