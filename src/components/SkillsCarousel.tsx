
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import dataSkills from "../json/skills.json";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../style/skillsCaroussel.scss'; // Le CSS associé

const SkillsCarousel = () => {



  return (
    <div className="skills-carousel">
    <Swiper
      modules={[Navigation, Pagination]}
      // navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
      }}
      spaceBetween={30}
    >
      {dataSkills.map((skill, index) => (
        <SwiperSlide key={index}>
          <div className="card">
            <h3>{skill.titre}</h3>
            <div className="skills">
              {skill.skills.map((icon : any, idx:number) => (
                <div key={idx} className="content">
                <img style={{width:"50px", height:"50px"}}src={icon.image} alt="" />
                <p>{icon.name}</p>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default SkillsCarousel;