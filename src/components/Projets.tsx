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
  const projetsMenu = [
    "React",
    "NextJS",
    "Javascript",
    "PHP (wordpress)",
  ];

  const [selectedMenu, setSelectedMenu] = useState<string>("React");
  const [AllprojetsIsOpen, setAllprojetsIsOpen] = useState<boolean>(false);

  return (
    <>
      <section className="projets_section">
        <div className="title_section">
          <span className="title_section_line_gauche"></span>
          <h2 className="test">Réalisations</h2>
          <span className="title_section_line_droite"></span>
        </div>

        {!AllprojetsIsOpen && (
          <div className="projets_container">
            <h4>Derniers projets</h4>
            <div className="projets">
              {projets
                .sort((a, b) => b.id - a.id)
                .slice(0, 3)
                .map((projet: Projet) => (
                  <ProjetCard2 projet={projet}/> 
                ))}
            </div>
          </div>
        )}

        <div className="all_projets_section">
          {AllprojetsIsOpen ? (
            <a
              href="#projets"
              className="bouton"
              onClick={() => setAllprojetsIsOpen(!AllprojetsIsOpen)}
            >
              Masquer les projets
            </a>
          ) : (
            <button
              className="bouton"
              onClick={() => setAllprojetsIsOpen(!AllprojetsIsOpen)}
            >
              Voir tous les projets
            </button>
          )}

          {AllprojetsIsOpen && (
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
                {selectedMenu
                  ? projets
                      .filter((projet: Projet) =>
                        projet.categorie.includes(selectedMenu)
                      )
                      .map((projet: Projet) => (
                        <ProjetCard2 key={projet.id} projet={projet} />
                      ))
                  : projets.map((projet: Projet) => (
                      <ProjetCard2 key={projet.id} projet={projet} />
                    ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
    </>
  );
};

export default Projets;
