
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import * as constants from "./Constants";
import { SkillItem } from './SkillIItem';


export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>{constants.SkillsHeadliner}</p>
              <Carousel responsive={constants.responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {constants.skills.map((skill, index) => (
                  <SkillItem key={index} skill={skill.skill} percentage={skill.percentage} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )

}