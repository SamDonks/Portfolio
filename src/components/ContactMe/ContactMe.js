import React, { useState, useRef  } from 'react';
import emailjs from 'emailjs-com';
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import './contactme.css';


function EmailForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceId = 'service_p2ofkr5'; // Replace with your email service ID
    const templateId = 'template_y74ppkd'; // Replace with your email template ID
    const userId = '97KFSanqvK-Qf8E56'; // Replace with your email user ID

    emailjs.send(serviceId, templateId, {
      from_name: name,
      reply_to: email,
      message: message,
    }, userId)
      .then(() => {
        console.log('Email sent successfully!');
        alert('Email sent!')
      })
      .catch((err) => {
        console.error('Email failed to send:', err);
      });

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
    <Container fluid className="contact-section">
        <h1 className="contact-heading">
          How to <strong className="purple">Contact me </strong>
        </h1>
        <p style={{ color: "white" }}>
          The form below is how you can contact me to build you a website.
        </p>
    <form  onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
    <Particle />
    </Container>
    </div>
  );
}

export default EmailForm;
