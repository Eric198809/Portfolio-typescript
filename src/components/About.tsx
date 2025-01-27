import "../style/about.scss";

const About: React.FC = () => {
  return (
    <>
      <section className="about_container">
        <div className="title_section">
          <span className="title_section_line_gauche"></span>
          <h2 className="test">A propos</h2>
          <span className="title_section_line_droite"></span>
        </div>
        <div className="content_a_propos_container">
          <div className="image_a_propos_container">
            <div className="image_a_propos_background">
              <div className="image_a_propos">
                <img
                  className="portrait_Eric"
                  src="/images/Eric-portrait.jpg"
                  alt="portrait"
                />
              </div>
            </div>
          </div>
          <div className="content_container">
            <div className="titles_a_propos">
              <span className="Eric_Besson">Eric Besson</span>
              <h3>Développeur web full stack</h3>
            </div>
            <p>
              Je m'appelle Eric, j'ai 35 ans et je suis développeur junior. J'ai
              découvert le monde du web et de la programmation en 2022.{" "}
              <br></br> <br></br>
              Après plus de 10 ans d'expérience dans le domaine du
              commerce/marketing, j'ai décidé de changer de voie et de me
              reconvertir professionnellement pour faire de ma passion ma
              profession. <br></br> <br></br>
              J'ai débuté mon apprentissage de manière autonome puis, en
              novembre 2023, j'ai débuté une formation de "Développeur web /
              web mobile" qui m'a permis de monter en compétences à la fois
              sur du développement Front-end et Back-end. <br></br> <br></br>
              Aujourd'hui, j'aime imaginer, créer, apprendre sans cesse de
              nouvelles choses et me lancer dans de nouveaux projets plus
              passionnants les uns que les autres.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
