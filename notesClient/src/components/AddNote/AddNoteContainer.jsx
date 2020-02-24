import { connect } from 'react-redux';
import AddNote from './AddNote';
import { addNoteOperation, createNewTag } from '../../redux/operations';

const mapStateToProps = ({ notes }) => ({
  tags: notes.tags,
});

const mapOperationToProps = {
  addNoteOperation: obj => addNoteOperation(obj),
  createNewTag: tagName => createNewTag(tagName),
};

export default connect(mapStateToProps, mapOperationToProps)(AddNote);
