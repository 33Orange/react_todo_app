import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './redux/store';
import Pages from './pages';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './style';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Provider store={store}>
            <Pages />
          </Provider>
        </Router>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
