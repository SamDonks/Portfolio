import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sam </span>
            from <span className="purple">United Kingdom</span>
            <br />I am a frontend developer with a passion for creating visually stunning and intuitive user interfaces. Over the past 3 years, I have honed my skills in React development to build dynamic and responsive websites and applications. My portfolio reflects my dedication to creating high-quality work that prioritizes user experience and accessibility. 
              When I'm not coding, you can find me playing onlines games with my friends or outside with my cat or dog.
            <br />
            <br />
          </p>
          <ul>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
