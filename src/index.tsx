import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.scss';

import NavigationBar from './components/NavigationBar';
import { store } from './redux/store';
import Pages from './pages';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Provider store={store}>
          <Pages />
        </Provider>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
