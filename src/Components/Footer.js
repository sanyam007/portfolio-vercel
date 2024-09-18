import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = ({ className }) => {
  return (
    <footer className={`footer ${className}`}>
        <Row className="align-items-center">
            <Col md={4} className="text-md-start text-center">
                <p>Designed and Developed by Sanyam Chhabra</p>
            </Col>
            <Col md={4} id="p2" className="text-center">
                <p>Copyright ©  2024. All Rights Reserved</p>
            </Col>
            <Col md={4} className="social-icon-footer text-md-end text-center" id="footer-icon">
                <a href="https://www.linkedin.com/in/sanyamchhabra-s1997/"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://github.com/sanyam007?tab=repositories"><img src={navIcon2} alt="Icon" /></a>
                <a href="https://www.instagram.com/sanyam_chhabra_/"><img src={navIcon3} alt="Icon" /></a>
            </Col>
        </Row>
    </footer>
  )
}