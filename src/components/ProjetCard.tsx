import { useState } from "react";
import "../style/projetCard.scss";
import ModalCardDetails from "./ModalCardDetails";

interface Projet {
  id: number;
  content: string;
  image: string;
  titre: string;
  stackDetails: { image: string; techno: string }[];
  imageStack: string[];
  website?: string;
  githubLink?: string;
  details?:string[]
}

interface ProjetCardProps {
  projet: Projet;
}

const ProjetCard: React.FC<ProjetCardProps> = ({ projet }) => {
  const [modalDetailIsOpen, setModalDetailsIsOpen] = useState<boolean>(false);

  return (
    <>
    <div className="" style={{display: "flex", flexDirection:"column"}}>
      <div
        key={projet.id}
        className="projet_card"
        style={{ backgroundImage: `url(${projet.image})` }}
      >
        <button
          type="button"
          className="open_modal_card_details"
          onClick={() => setModalDetailsIsOpen(true)}
        >
          <img src="/icons/plus.svg" alt="icone plus" />
        </button>

        
      </div>
      <div className="content_projet">
          <h3>{projet.titre}</h3>
          <div className="stack_projets">
            {projet.imageStack.map((stack, index) => (
              <img
                key={index}
                src={stack}
                alt="image stack projet"
                style={{ width: "40px" }}
              />
            ))}
          </div>
          <div className="projet_card_bouton">
            {projet.website && (
              <a className="bouton" href={projet.website}>
                Voir le site
                <img style={{ width: "15px" }} src="/icons/logoworld.svg" alt="logo world" />
              </a>
            )}
           { projet.githubLink &&<a className="bouton" href={projet.githubLink}>
              Voir le Github
              <img style={{ width: "20px" }} src="/icons/github2.svg" alt="logo github" />
            </a>}
          </div>
        </div>
      {modalDetailIsOpen && (
        <ModalCardDetails
          setModalDetailsIsOpen={setModalDetailsIsOpen}
          modalDetailIsOpen={modalDetailIsOpen}
          projet={projet}
        />
      )}
      </div>
    </>
  );
};

export default ProjetCard;
