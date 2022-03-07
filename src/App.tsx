import React from 'react';
import {Routing} from './Routing';
import {HashRouter} from 'react-router-dom';
import {HeaderMenu} from './components/HeaderMenu';

const App = () => {
    return (
      <>
          <HashRouter>
              <Routing/>
          </HashRouter>
      </>
    );
};

export default App;