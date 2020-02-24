import React, { useState } from 'react';
import { Form, Button, Row, Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import T from 'prop-types';
import uuid from 'uuid';
import style from './addNote.module.css';

const AddNote = ({ tags, addNoteOperation, createNewTag }) => {
  const [name, nameOnChange] = useState('');
  const [tag, tagOnChange] = useState('');
  const [text, textOnChange] = useState('');
  const [newTag, newTagChange] = useState('');

  AddNote.defaultProps = {
    tags: [],
  };

  AddNote.propTypes = {
    tags: T.arrayOf(T.object),
    addNoteOperation: T.func.isRequired,
    createNewTag: T.func.isRequired,
  };

  const addNewTag = e => {
    e.preventDefault();
    createNewTag(newTag);
    newTagChange('');
  };

  const onNewTagChange = e => {
    newTagChange(e.target.value);
  };

  const onChange = e => {
    nameOnChange(e.target.value);
  };

  const onChangetag = e => {
    tagOnChange(e.target.value);
  };

  const onChangeText = e => {
    textOnChange(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addNoteOperation({ name, text, tag });
    nameOnChange('');
    tagOnChange('');
    textOnChange('');
  };

  return (
    <CSSTransition
      appear
      in
      timeout={300}
      classNames={{ appear: style.appear, appearDone: style.appearD }}
    >
      <Container className={style.center}>
        <Row className="justify-content-md-center">
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Add your note</Form.Label>
              <Form.Control
                value={name}
                onChange={onChange}
                type="text"
                placeholder="Name of note"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control value={tag} onChange={onChangetag} as="select">
                {tags.length > 0 ? (
                  tags.map(item => <option key={uuid.v1()}>{item.name}</option>)
                ) : (
                  <option>No tags</option>
                )}
              </Form.Control>
              <Form.Text className="text-muted">Choose tag</Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Text</Form.Label>
              <Form.Control
                as="textarea"
                onChange={onChangeText}
                value={text}
                rows="3"
              />
            </Form.Group>
            <Button type="submit" variant="primary" size="md">
              Add
            </Button>
          </Form>
        </Row>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: '20px' }}
        >
          <Form.Group>
            <Form.Control
              value={newTag}
              onChange={onNewTagChange}
              placeholder="Enter new tag"
              style={{ marginBottom: '20px' }}
            />
            <Button onClick={addNewTag} type="button">
              Add new tag
            </Button>
          </Form.Group>
        </Row>
      </Container>
    </CSSTransition>
  );
};

export default AddNote;
