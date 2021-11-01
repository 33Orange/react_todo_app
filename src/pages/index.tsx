import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TodosPage from './TodosPage';
import LoginPage from './LoginPage';
import NavigationBar from '../components/NavigationBar';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './style';

const Pages = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route path="/todos">
          <TodosPage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </ThemeProvider>
  );
};

export default Pages;
