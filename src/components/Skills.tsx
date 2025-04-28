import "../style/skills.scss";
import SkillsCarousel from "./SkillsCarousel";

// interface Skill {
//   image: string;
//   name: string;
// }

const Skills = () => {
  return (
    <>
      <section className="skills_cointainer_section">
        <div className="title_section">
          <span className="title_section_line_gauche"></span>
          <h2 className="test">Compétences</h2>
          <span className="title_section_line_droite"></span>
        </div>
        <p>
          En tant que développeur full-stack, j'ai toujours été attiré par le
          langage JavaScript, un langage qui me permet de donner vie à des
          projets dynamiques et interactifs. Je me suis spécialisé dans ce
          domaine et utilise principalement React.
        </p>

        <SkillsCarousel />
      </section>
    </>
  );
};

export default Skills;
