import { combineReducers } from 'redux';
import Types from './Types';

function tags(state = null, action) {
  switch (action.type) {
    case Types.MAIN_FETCH_SUCCESS:
      return action.payload;
    case Types.ADD_TAG_SUCCESS:
      return [...state, { name: action.payload }];
    default:
      return state;
  }
}

function list(state = [], action) {
  switch (action.type) {
    case Types.GET_LIST_SUCCESS:
      return action.payload;
    case Types.DELETE_NOTE_SUCCESS:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case (Types.MAIN_FETCH_START,
    Types.ADD_NOTE_START,
    Types.ADD_TAG_START,
    Types.GET_LIST_START,
    Types.DELETE_NOTE_START):
      return true;
    case (Types.GET_LIST_SUCCESS,
    Types.GET_LIST_ERROR,
    Types.MAIN_FETCH_ERROR,
    Types.MAIN_FETCH_SUCCESS,
    Types.ADD_NOTE_ERROR,
    Types.ADD_NOTE_SUCCESS,
    Types.ADD_TAG_SUCCESS,
    Types.ADD_TAG_ERROR,
    Types.DELETE_NOTE_ERROR,
    Types.DELETE_NOTE_SUCCESS):
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  notes: combineReducers({ tags, list }),
  isLoading: loading,
});
