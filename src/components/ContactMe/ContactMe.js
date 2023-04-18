import React from 'react'
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function ContactMe() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="contact-heading">
          How to <strong className="purple">Contact me </strong>
        </h1>
        <p style={{ color: "white" }}>
          The form below is how you can contact me to build you a website.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label class='form-labels'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Disabled select menu</Form.Label>
                <Form.Select>
                <option>Disabled select</option>
                <option>Disabled select</option>
                <option>cheese select</option>
                <option>Disabled select</option>
                </Form.Select>
            </Form.Group>
            </Form>
        </Row>
      </Container>
    </Container>
  )
}

export default ContactMe