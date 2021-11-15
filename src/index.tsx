import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './redux/store';
import Pages from './pages';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Pages />
      </Provider>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
