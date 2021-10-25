import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import TodosList from './components/TodosList';
import store from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodosList />
      </Provider>
    );
  }
}
render(<App />, document.querySelector('#root'));
