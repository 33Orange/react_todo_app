import React from 'react';
import { render } from 'react-dom';
import TodosList from './components/TodosList';
import './styles/style.scss';

class App extends React.Component {
  render() {
    return <TodosList />;
  }
}

render(<App />, document.querySelector('#root'));
