import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancer = applyMiddleware(thunk);
const initialState = { notes: { tags: [], list: [] }, isLoading: false };
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(enhancer),
);

export default store;
