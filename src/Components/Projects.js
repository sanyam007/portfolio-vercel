import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.jpeg";
import projImg2 from "../assets/img/project2.jpeg";
import projImg3 from "../assets/img/project3.jpeg";
import projImg4 from "../assets/img/project4.jpeg";
import projImg5 from "../assets/img/project5.png";


import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
    const projects = [
        {
          title: "YelpCamp",
          description: "Booking and Exploring new campgrounds",
          imgUrl: projImg1,
        },
        {
          title: "Jobbers",
          description: "Dating-like job search app helps to find jobs in smart way",
          imgUrl: projImg2,
        },
        {
            title: "  Car Resale Predictor",
            description: "Estimating the future price of used cars using Linear Regression model",
            imgUrl: projImg5,
        },
        {
          title: "Burger Builder",
          description: "Build and Order your customized burger",
          imgUrl: projImg4,
        },
        {
            title: "Web RTC App",
            description: "Real time video Communication Web App",
            imgUrl: projImg3,
        },
        
      ];
    
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav> */}
                            <Tab.Content className="tabContent">
                                <Tab.Pane className="tabPane" eventKey="first">
                                    <div className="project-cards">
                                    {
                                        projects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index} {...project} />
                                        )
                                    })
                                    }
                                    </div>
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey="second">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane> */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2}></img> */}
        </section>
    )
}