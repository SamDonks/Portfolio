import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import tourne from "../../Assets/Projects/tourne.PNG";
import ghostraffles from '../../Assets/Projects/ghostraffles.PNG';
import ghostproxies from '../../Assets/Projects/ghostproxies.PNG';
import vision from '../../Assets/Projects/vision.PNG';
import bulletmarketing from '../../Assets/Projects/bulletmarketing.PNG';
import iceyisps from '../../Assets/Projects/iceyisps.PNG';
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourne}
              isBlog={false}
              title="TourneAIO"
              description="Website for sneaker bot that was used to order certain products that the user wanted, as-well as setting up functionailty for the user to join a waiting list on the website to be able to purchase the sneaker bot."
              ghLink="https://github.com/DonkeyBoy223/TourneAIOwebsite"
              demoLink="https://tourneaiobot.xyz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bulletmarketing}
              isBlog={false}
              title="Bullet Marketing"
              description="Digital marketing page made using ReactJS, to show the services of the company, their aims and impact and then allowing the user to contact the company with a contact form at the bottom of the page."
              ghLink="https://github.com/donkeyboy223/"
              demoLink="https://bulletmarketing.org"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vision}
              isBlog={false}
              title="Vision Bot"
              description="Landing page created using ReactJS to showcase what the business can do to help you and greater your chances with shoe releases."
              ghLink="https://github.com/donkeyboy223/"
              demoLink="https://www.visionbot.cx/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ghostraffles}
              isBlog={false}
              title="GhostRaffles"
              description="Website created using ReactJS to showcase what this group offers and some functionailty to the website including a form to 'J1G' your address and malform it to look similar yet diffirent."
              ghLink="https://github.com/donkeyboy223/"
              demoLink="https://ghostraffles.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ghostproxies}
              isBlog={false}
              title="GhostProxies"
              description="Website created using ReactJS allow users to purchase proxies and then view them on there own personal dashboard, aswell as there being a seperate dashboard for an Admin to see to oversee everything."
              ghLink="https://github.com/donkeyboy223/"
              demoLink="https://www.ghostproxies.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iceyisps}
              isBlog={false}
              title="IceyIsps"
              description="This website created using ReactJS, allowed users to login with discord to purchase 'proxies' and then view them on there personal dashboard, also there being an seperate admin dashboard to be able to view everyones orders, which was protected using JWT tokens."
              ghLink="https://github.com/donkeyboy223/"
              demoLink="https://www.iceyisps.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
