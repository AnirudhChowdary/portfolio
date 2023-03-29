import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { CircularProgress } from "./CircularProgressBar";



export const Skills = () => {
  const skills = [
    {
      skill: "Java",
      percentage : 95

    },
    {
      skill: "Spring Boot",
      percentage : 95

    },
    {
      skill: "React",
      percentage : 90

    },
    {
      skill: "Oracle",
      percentage : 95

    }
    ,{
      skill:"GCP",
      percentage :90
    },
    {
      skill:"Docker",
      percentage :90
    }

  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> These skills represent a broader spectrum of my development journey, and that i possess many other skills beyond those listed here.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">  
                            <div className="item"><CircularProgress percentage={skills[0].percentage}></CircularProgress>
                            <h5>{skills[0].skill}</h5>
                            </div>
                            <div className="item"><CircularProgress percentage={skills[1].percentage}></CircularProgress>
                            <h5>{skills[1].skill}</h5>
                            </div>
                            <div className="item"><CircularProgress percentage={skills[2].percentage}></CircularProgress>
                            <h5>{skills[2].skill}</h5>
                            </div>
                            <div className="item"><CircularProgress percentage={skills[3].percentage}></CircularProgress>
                            <h5>{skills[3].skill}</h5>
                            </div>
                            <div className="item"><CircularProgress percentage={skills[4].percentage}></CircularProgress>
                            <h5>{skills[4].skill}</h5>
                            </div>
                            <div className="item"><CircularProgress percentage={skills[5].percentage}></CircularProgress>
                            <h5>{skills[5].skill}</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
