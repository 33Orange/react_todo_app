import React from 'react';
import { render } from 'react-dom';
import Todos from './components/TodosList';
import './styles/style.scss';
class App extends React.Component {
  render() {
    return <Todos />;
  }
}

render(<App />, document.querySelector('#root'));
