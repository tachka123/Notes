import axios from 'axios';
import Toast from 'light-toast';
import {
  mainFetchSuccess,
  mainFetchError,
  mainFetchStart,
  addNoteError,
  addNoteStart,
  addNoteSuccess,
  AddTagError,
  AddTagStart,
  AddTagSuccess,
  getListStart,
  getListError,
  getListSuccess,
  deleteNoteStart,
  deleteNoteError,
  deleteNoteSuccess,
} from './actions';

export const mainFetchOperation = () => async dispatch => {
  dispatch(mainFetchStart());
  try {
    const res = await axios.get('http://localhost:4000/tags/');
    dispatch(mainFetchSuccess(res.data));
  } catch {
    dispatch(mainFetchError());
  }
};

export const addNoteOperation = obj => async dispatch => {
  dispatch(addNoteStart());
  try {
    await axios.post('http://localhost:4000/notes', obj);
    Toast.success('Note is created', 1500);
    dispatch(addNoteSuccess());
  } catch {
    Toast.fail('Failed', 1500);
    dispatch(addNoteError());
  }
};

export const createNewTag = tagName => async dispatch => {
  dispatch(AddTagStart());
  try {
    await axios.post('http://localhost:4000/tags', { name: tagName });
    dispatch(AddTagSuccess(tagName));
    Toast.success('Tag is created', 1500);
  } catch {
    Toast.fail('Failed', 1500);
    dispatch(AddTagError());
  }
};

export const fetchList = () => async dispatch => {
  dispatch(getListStart());
  try {
    const res = await axios.get('http://localhost:4000/notes');
    dispatch(getListSuccess(res.data));
  } catch {
    dispatch(getListError());
  }
};

export const deleteNote = id => async dispatch => {
  dispatch(deleteNoteStart());
  try {
    await axios.delete(`http://localhost:4000/notes/${id}`);
    dispatch(deleteNoteSuccess(id));
  } catch {
    dispatch(deleteNoteError());
  }
};
