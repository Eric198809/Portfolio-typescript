import "../style/projetcards2.scss"

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

const Projets2 : React.FC<ProjetCardProps>= ({ projet }) => {
  return (
    <div className="cardContainer">
    <div className="imageWrapper">
     <img src={projet.image} alt="" />
      <div className="overlay">
      <p >
      {projet.content}
    </p>
      {projet.website && <div className="bouton">
        <a href={projet.website} >
          Visiter le site
        </a>
        </div>}
      {projet.githubLink &&<div className="bouton">
        <a href={projet.githubLink} >
         Voir le Github
        </a>
        </div>}
      </div>
    </div>
    <h3 >{projet.titre}</h3>
   
  
  </div>
  );
};

export default Projets2;