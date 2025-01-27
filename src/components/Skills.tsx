import dataSkills from "../json/skills.json";
import "../style/skills.scss";

interface Skill {
  image: string;
  name: string;
}

interface Category {
  catégorie: string;
  skills: Skill[];
}

const Skills = () => {
  return (
    <>
      <section className="skills_cointainer_section">
        <div className="title_section">
          <span className="title_section_line_gauche"></span>
          <h2 className="test">Compétences</h2>
          <span className="title_section_line_droite"></span>
        </div>
        <section className="skills">
          <div className="skills-container">
            {dataSkills.map((category: Category, index: number) => (
              <div key={index} className="category">
                <h3>{category.catégorie}</h3>
                <ul>
                  {category.skills.map((skill: Skill, index: number) => (
                    <li key={index}>
                      <img src={skill.image} alt={skill.name} />
                      <p>{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Skills;
