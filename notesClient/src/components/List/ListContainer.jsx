import { connect } from 'react-redux';
import { fetchList, deleteNote } from '../../redux/operations';
import List from './List';

const mapStateToProps = state => ({
  list: state.notes.list,
});

const mapOperationToProps = {
  fetchList,
  deleteNote: id => deleteNote(id),
};

export default connect(mapStateToProps, mapOperationToProps)(List);
