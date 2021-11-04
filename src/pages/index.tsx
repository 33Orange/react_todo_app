import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react';

import TodosPage from './TodosPage';
import LoginPage from './LoginPage';
import NavigationBar from '../components/NavigationBar';
import Page from '../components/Page';

import theme from './style';
import LinearProgress from '@mui/material/LinearProgress';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { checkUserRequest } from '../redux/actionCreators/userActionCreator';

const Pages = () => {
  const dispatch = useDispatch();
  const { isAuth } = useTypedSelector(state => state.user);
  const { isLoading } = useTypedSelector(state => state);

  useEffect(() => {
    dispatch(checkUserRequest());
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationBar />
        <Page title="loading">
          <LinearProgress />
        </Page>
      </ThemeProvider>
    );
  }

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
};

export default Pages;
