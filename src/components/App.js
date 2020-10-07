import React from 'react';

import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import Pets from '../Pages/Pets';

function App() {
  return (
    <>
      <Header />
      <div>
        <Switch>
          <Route exact path='/' component={Pets} />
        </Switch>
      </div>
    </>
  );
}

export default App;
