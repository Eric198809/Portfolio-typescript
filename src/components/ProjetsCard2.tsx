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
      <div className="images-stack">
        {projet.stackDetails.map((stack)=>(
          
          <img style={{width: "40px", height: "40px"}}src={stack.image} alt="" />
         
        ))} </div>
      <p >
      {projet.content}
    </p>
    <div className="boutons-projets">
      {projet.website && <div className="bouton-projet">
        <a href={projet.website} >
          Visiter le site
        </a>
        </div>}
      {projet.githubLink &&<div className="bouton-projet">
        <a href={projet.githubLink} >
         Voir le Github
        </a>
        </div>}</div>
      </div>
    </div>
    <h3 >{projet.titre}</h3>
   
  
  </div>
  );
};

export default Projets2;