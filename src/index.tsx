import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './style.scss';

import NavigationBar from './components/NavigationBar';
import LoginPage from './components/Login';
import TodosList from './components/TodosList';
import { store } from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Provider store={store}>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/todos">
              <TodosList />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Provider>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
