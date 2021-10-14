import React from 'react';
import { render } from 'react-dom';
import TodosList from './components/TodosList';

class App extends React.Component {
  render() {
    return <TodosList />;
  }
}
render(<App />, document.querySelector('#root'));
