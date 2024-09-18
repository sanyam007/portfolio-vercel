import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/img/skill1.svg";
import skill2 from "../assets/img/skill2.svg";
import skill3 from "../assets/img/skill3.svg";
import skill4 from "../assets/img/skill4.svg";
import skill5 from "../assets/img/skill5.svg";
import skill7 from "../assets/img/skill7.svg";
import skill8 from "../assets/img/skill8.svg";
import skill9 from "../assets/img/skill9.svg";
import skill10 from "../assets/img/skill10.svg";
import skill11 from "../assets/img/skill11.svg";
import skill12 from "../assets/img/skill12.svg";
import tool1 from "../assets/img/tool1.svg";
import tool2 from "../assets/img/tool2.svg";
import tool3 from "../assets/img/tool3.svg";
import tool4 from "../assets/img/tool4.svg";
import tool5 from "../assets/img/tool5.svg";


import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
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
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2 className="wrap">
                                Skills
                            </h2>
                            {/* <p>dgfhjklfv fhcvdhjkjc fhcgjhvbef fhgchvbjjkff chjvkbjf</p> */}
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={skill1} alt="image" />
                                    <h5>React </h5>
                                </div>
                                <div className="item">
                                    <img src={skill2} alt="image" />
                                    <h5>JavaScript </h5>
                                </div>
                                <div className="item">
                                    <img src={skill3}meter1 alt="image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={skill4} alt="image" />
                                    <h5>CSS </h5>
                                </div>
                                <div className="item">
                                    <img src={skill5} alt="image" />
                                    <h5>c++ </h5>
                                </div>
                                <div className="item">
                                    <img src={skill7} alt="image" />
                                    <h5>GIT </h5>
                                </div>
                                <div className="item">
                                    <img src={skill8} alt="image" />
                                    <h5>MongoDb </h5>
                                </div>
                                <div className="item">
                                    <img src={skill9} alt="image" />
                                    <h5>jQuery </h5>
                                </div>
                                <div className="item">
                                    <img src={skill10} alt="image" />
                                    <h5>PowerShell </h5>
                                </div>
                                <div className="item">
                                    <img src={skill11} alt="image" />
                                    <h5>Firebase </h5>
                                </div>
                                <div className="item">
                                    <img src={skill12} alt="image" />
                                    <h5>AWS </h5>
                                </div>
                            </Carousel>
                            <br />
                            <br />
                            <br />
                            <h2 className="wrap">
                                Tools
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={tool1} alt="image" />
                                    <h5>VS Code </h5>
                                </div>
                                <div className="item">
                                    <img src={tool2} alt="image" />
                                    <h5>Postman </h5>
                                </div>
                                <div className="item">
                                    <img src={tool3} alt="image" />
                                    <h5>Slack </h5>
                                </div>
                                <div className="item">
                                    <img src={tool4} alt="image" />
                                    <h5>Jenkins </h5>
                                </div>
                                <div className="item">
                                    <img src={tool5} alt="image" />
                                    <h5>GitHub </h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className="background-image-left "/>
        </section>
      )
    
}