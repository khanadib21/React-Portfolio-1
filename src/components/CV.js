import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Resume from "../files/Resume.pdf";

function CV() {
  return (
    <div className="bg-white">
      <Container >
        <Row>
          <Col >
            <h1>Resume</h1>
            <hr />
            <Button variant="dark" href={Resume} download>
              Download
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default CV;