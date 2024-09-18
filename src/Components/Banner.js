import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HashLink } from 'react-router-hash-link';
import headerImage from "../assets/img/header-img.svg";
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Full-Stack Developer","MERN Stack Developer","Software Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150);
    const period =  1000;

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta(50);
          }
      
          if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
          }else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(150);
          } 
    } 
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Space</span>
                        <h1>{`Hi there`} <span class="wave">👋🏻</span> </h1>
                        <h1>{`I'm`} <span className="wrap"> {`Sanyam`} </span></h1>
                        <h1 className="wrap">!{text}</h1>
                        <p>Software Developer with 3 years of experience, specializing in full-stack development and problem-solving with expertise in MERN stack technologies, including MongoDB, Express.js, React.js, and Node.js. Actively looking for opportunities in software development role and in fintech to use my ability to develop efficient solutions.</p>
                        <HashLink to="/contact">
                            <button >Let's Connect <ArrowRightCircle size={25} /> </button>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="header-img" src={headerImage} alt="Header img"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}