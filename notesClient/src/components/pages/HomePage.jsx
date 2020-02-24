import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import animation from './animation.module.css';

const HomePage = () => {
  return (
    <CSSTransition timeout={400} appear in classNames={animation} unmountOnExit>
      <Container style={{ textAlign: 'center' }}>
        <Row>
          <Col>
            <h2>Welcome to Notes!</h2>
            <h3>Choose an option</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/add-note">
              <Button variant="primary" size="lg">
                Create Note
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/notes">
              <Button variant="primary" size="lg">
                List of notes
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </CSSTransition>
  );
};

export default HomePage;
