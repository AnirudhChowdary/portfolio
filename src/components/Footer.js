import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import resume from '../assets/files/Anirudh_Chowdary_Resume.pdf'
import download from '../assets/img/download.svg'
import * as constants from './Constants'

export const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={constants.LinkedIn}><img src={navIcon1} alt="Icon" /></a>
              <div className="social-icon"> <a  href={resume} download=""><img className="download" src={download} alt=""/></a></div>
              
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
