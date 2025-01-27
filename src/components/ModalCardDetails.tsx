import "../style/modalCartdDetails.scss";


interface Projet {
  id: number;
  content: string;
  image: string;
  titre: string;
  stackDetails: { image: string; techno: string }[];
  imageStack: string[];
  website?: string;
  githubLink?: string;
  details?: string[]
}

interface ModalCardDetailsProps {
  setModalDetailsIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalDetailIsOpen: boolean;
  projet: Projet;
}

const ModalCardDetails: React.FC<ModalCardDetailsProps> = ({
  setModalDetailsIsOpen,
  projet,
}) => {
  console.log(projet);

  return (
    <div className="modal_details_card_container">
      <button
        type="button"
        className="button_close_modal_card_details"
        onClick={() => setModalDetailsIsOpen(false)}
      >
        <img src="/icons/croix.svg" alt="icone fermer" />
      </button>
      <div className="main_image_details_card_container">
        <img src={projet.image} style={{ width: "100%" }} alt="" />
      </div>
      <div className="describe_projet">
        <h3>{projet.titre}</h3>
        <p>{projet.content}</p>
      </div>

      <div className="stack_projet">
        {projet.stackDetails.map((stack, index:number) => (
          <div key={index} className="stack">
            <img src={stack.image} alt="" />
            <p>{stack.techno}</p>
          </div>
        ))}
      </div>
      <div className="details_projet">
        {projet.details &&
          projet.details.map((detail: string, index: number) => <p key={index}>{detail}</p>)}
      </div>
    </div>
  );
};

export default ModalCardDetails;
