import Header from "../components/Header.tsx";
import Navbar from "../components/Navbar.tsx";
import About from "../components/About.tsx";
import Skills from "../components/Skills.tsx";
import Projets from "../components/Projets.tsx";
import Footer from "../components/Footer.tsx";
import "../style/home.scss";


function Home() {

  // Fonction pour remonter en haut de la page
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <>
      <Navbar />
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projets">
        <Projets />
      </div>
      <div id="footer">
        <Footer />
      </div>
      <div className="up" onClick={scrollToTop}>
        <img src="/icons/arrowup.svg" alt="fleche" />
      </div>
      
    </>
  );
}

export default Home;
