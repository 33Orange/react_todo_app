import React from 'react';
import { render } from 'react-dom';
import TodosList from './components/TodosList';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends React.Component {
  render() {
    return <TodosList />;
  }
}
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
