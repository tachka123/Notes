import Types from './Types';

export const mainFetchSuccess = result => ({
  type: Types.MAIN_FETCH_SUCCESS,
  payload: result,
});

export const mainFetchStart = () => ({
  type: Types.MAIN_FETCH_START,
});

export const mainFetchError = () => ({
  type: Types.MAIN_FETCH_ERROR,
});

export const addNoteSuccess = result => ({
  type: Types.ADD_NOTE_SUCCESS,
  payload: result,
});

export const addNoteStart = () => ({
  type: Types.ADD_NOTE_START,
});

export const addNoteError = () => ({
  type: Types.ADD_NOTE_ERROR,
});

export const AddTagSuccess = result => ({
  type: Types.ADD_TAG_SUCCESS,
  payload: result,
});

export const AddTagStart = () => ({
  type: Types.ADD_TAG_START,
});

export const AddTagError = () => ({
  type: Types.ADD_TAG_ERROR,
});

export const getListSuccess = result => ({
  type: Types.GET_LIST_SUCCESS,
  payload: result,
});

export const getListStart = () => ({
  type: Types.GET_LIST_START,
});

export const getListError = () => ({
  type: Types.GET_LIST_ERROR,
});

export const deleteNoteSuccess = result => ({
  type: Types.DELETE_NOTE_SUCCESS,
  payload: result,
});

export const deleteNoteStart = () => ({
  type: Types.DELETE_NOTE_START,
});

export const deleteNoteError = () => ({
  type: Types.DELETE_NOTE_ERROR,
});
