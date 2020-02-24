import React, { useEffect, useState } from 'react';
import { Row, Col, Alert, Card, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import T from 'prop-types';
import anim from './anim.module.css';

const List = ({ fetchList, list, deleteNote }) => {
  List.propTypes = {
    fetchList: T.func.isRequired,
    deleteNote: T.func.isRequired,
    list: T.arrayOf(T.object),
  };

  List.defaultProps = {
    list: [],
  };

  const [isMainFetchCompleted, completed] = useState(false);

  useEffect(() => {
    if (!isMainFetchCompleted) {
      fetchList();
    }
  });

  useEffect(() => {
    completed(true);
  }, [isMainFetchCompleted]);

  return (
    <div>
      <CSSTransition appear in timeout={900} classNames={anim}>
        {list.length > 0 ? (
          <TransitionGroup>
            {list.map(item => (
              <CSSTransition classNames={anim} timeout={400} key={item.id}>
                <Row style={{ margin: '10px 0', textAlign: 'center' }}>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {item.tag}
                        </Card.Subtitle>
                        <Card.Text>{item.text}</Card.Text>
                      </Card.Body>
                      <Button
                        onClick={() => deleteNote(item.id)}
                        variant="danger"
                      >
                        delete
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </CSSTransition>
            ))}
          </TransitionGroup>
        ) : (
          <Alert variant="warning">List of notes is empty</Alert>
        )}
      </CSSTransition>
    </div>
  );
};

export default List;
