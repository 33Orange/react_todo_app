import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import TodosPage from './TodosPage';
import LoginPage from './LoginPage';
import NavigationBar from '../components/NavigationBar';
import Page from '../components/Page';

import theme from './style';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { isAuthSelector } from '../redux/selectors';

export default React.memo(function Pages() {
  const isAuth = useTypedSelector(isAuthSelector);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />
      {!isAuth ? (
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/todos">
            <TodosPage />
          </Route>
          <Redirect to="/todos" />
        </Switch>
      )}
    </ThemeProvider>
  );
});
