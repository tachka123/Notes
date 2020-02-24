import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { Button, Nav, NavItem, Row, Col } from 'react-bootstrap';
import style from './logo.module.css';

const Logo = () => {
  return (
    <CSSTransition
      appear
      in
      timeout={300}
      classNames={{ appear: style.appear, appearDone: style.appearD }}
    >
      <Row style={{ alignItems: 'center' }}>
        <Col>
          <h1 className={style.logo}>Notes</h1>
        </Col>
        <Col>
          <Nav
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <NavItem>
              <Link to="/">
                <Button size="sm">Home</Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="notes">
                <Button size="sm">Notes</Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="add-note">
                <Button size="sm">Add note</Button>
              </Link>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </CSSTransition>
  );
};

export default Logo;
