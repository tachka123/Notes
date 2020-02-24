import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { BoxLoading } from 'react-loadingg';
import '../variables/variable.css';
import Logo from './Logo/Logo';
import Style from './app.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNote from './AddNote/AddNoteContainer';
import HomePage from './pages/HomePage';
import List from './List/ListContainer';

function App({ mainFetchOperation, isLoading }) {
  App.defaultProps = {
    isLoading: false,
  };

  App.propTypes = {
    isLoading: T.bool,
    mainFetchOperation: T.func.isRequired,
  };

  const [isMainFetchCompleted, completed] = useState(false);

  useEffect(() => {
    if (!isMainFetchCompleted) {
      mainFetchOperation();
    }
  });

  useEffect(() => {
    completed(true);
  }, [isMainFetchCompleted]);

  return (
    <div className={Style.container}>
      <Switch>
        <Route path="/add-note">
          <Logo />
          <AddNote />
        </Route>
        <Route path="/notes">
          <Logo />
          <List />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      {isLoading && <BoxLoading />}
    </div>
  );
}

export default App;
