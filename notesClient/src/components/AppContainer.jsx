import { connect } from 'react-redux';
import { mainFetchOperation } from '../redux/operations';
import App from './App';

const mapActionToProps = {
  mainFetchOperation,
};

const mapStateToProps = ({ isLoading }) => ({
  isLoading,
});

export default connect(mapStateToProps, mapActionToProps)(App);
