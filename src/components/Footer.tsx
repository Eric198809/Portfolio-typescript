import "../style/footer.scss";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer_section">
        <div className="title_section">
          <span className="title_section_line_gauche"></span>
          <h2 className="test">Contact</h2>
          <span className="title_section_line_droite"></span>
        </div>
        <div className="footer_container">
          <div className="footer_coordonnees">
            <div className="footer_info">
              <img src="/icons/position.svg" alt="position icon" />
              <p>Lyon | Beaujolais | Villefranche Sur Saone</p>
            </div>
            <div className="footer_info">
              <img src="/icons/phone.svg" alt="phone icon" />
              <p>06.77.15.85.85</p>
            </div>
            <div className="footer_info">
              <img src="/icons/email.svg" alt="email icon" />
              <p>ebesson180988@gmail.com</p>
            </div>
          </div>
          <div className="footer_reseaux">
            <a href="https://www.linkedin.com/in/eric-besson-517763123/">
              <img src="/icons/linkedin.svg" alt="Logo linkedin" />
            </a>
            <a href="https://www.linkedin.com/in/eric-besson-517763123/">
              <img src="/icons/github.svg" alt="Logo Github" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
