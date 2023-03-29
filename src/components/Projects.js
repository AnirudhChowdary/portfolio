import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import MicroService from "../assets/img/MicroService.png";
import EMS from "../assets/img/EMS.png";
import TT from "../assets/img/TT.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ThisProject from '../assets/img/ThisProject.png'

export const Projects = () => {

  const projects = [
    {
      title: "Java Backend MicroService",
      description: "WEB CRAWLER",
      imgUrl : MicroService,
      httpUrl : "https://github.com/AnirudhChowdary/Web-Crawler"
    },
    {
      title: "Php Full Stack Web Application",
      description: "Employee Management System",
      imgUrl: EMS,
      httpUrl : "https://github.com/AnirudhChowdary/EMS"
    },
    {
      title: "Full Stack Web Application With Docker and Gcp Cloud Integration",
      description: "Task Tracker ",
      imgUrl: TT,
      httpUrl : "https://github.com/AnirudhChowdary/TaskTrackerBackEnd"
    },

  ];

  const projectsTab2 = [
    {
      title: "React Web Application",
      description: "Portfolio",
      imgUrl: ThisProject,
      httpUrl : "https://github.com/AnirudhChowdary/portfolio"
    },
    {
      title: "Java Backend MicroService",
      description: "File Search using vector indexing",
      imgUrl : MicroService,
      httpUrl : "https://github.com/AnirudhChowdary/FileSearchBoot"
    }
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This are few of my front end and backend projects, While i have done multiple projects as a part of the course work which are not listed here</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsTab2.map((projectsTab2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projectsTab2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
