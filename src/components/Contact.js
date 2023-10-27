import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

function Contact() {
  const [email, setEmail] = useState("");
  const [myName, setMyName] = useState("");
  const [msg, setMsg] = useState("");
  const [msgError, setMsgError] = useState(false);
  const [myNameError, setMyNameError] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const NameChange = (e) => {
    setMyName(e.target.value);
    setMyNameError(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
    setMsgError(false);
  };

  const emailRegex = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (myName.length <= 5) {
      setMyNameError(true);
      valid = false;
    }
    if (!emailRegex(email)) {
      setEmailError(true);
      valid = false;
    }
    if (msg.length < 150) {
      setMsgError(true);
      valid = false;
    }

    if (valid) {
      console.log(`Name: ${myName}, Email: ${email}, Message: ${msg}`);
      setMyName("");
      setEmail("");
      setMsg("");
      setMsgSent(true);
    }
  };

  return (
    <section id="contact">
      <Container>
        <Row>
          <div lg={8} className="mx-auto">
            <h2 >Contact Me</h2>
            {msgSent && (
              <div className="alert alert-success" role="alert">
                Your msg has been sent successfully!
              </div>
            )}
            <Form onSubmit={formSubmit} noValidate>
              <Form.Group>
                <Form.Label htmlFor="myName">Name:</Form.Label>
                <Form.Control
                  type="text"
                  className={myNameError ? "is-invalid" : ""}
                  id="myName"
                  myName="myName"
                  value={myName}
                  onChange={NameChange}
                  required
                />
                {myNameError && (
                  <div className="invalid-feedback">
                    Name must be more than 7 characters
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control
                  type="email"
                  className={emailError ? "is-invalid" : ""}
                  id="email"
                  value={email}
                  myName="email"
                  onChange={handleEmailChange}
                  required
                />
                {emailError && (
                  <div className="invalid-feedback">
                    A valid email is required
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="msg">Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  className={msgError ? "is-invalid" : ""}
                  id="msg"
                  myName="msg"
                  rows="5"
                  value={msg}
                  onChange={handleMsgChange}
                />
                {msgError && (
                  <div className="invalid-feedback">
                    Message must be at least 200 characters
                  </div>
                )}
              </Form.Group>
              <Button type="submit" className="custom-send-msg-button">
                Send
              </Button>
            </Form>
          </div>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
