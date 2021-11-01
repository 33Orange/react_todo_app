import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TodosPage from './TodosPage';
import LoginPage from './LoginPage';
import NavigationBar from '../components/NavigationBar';

const Pages = () => {
  return (
    <div>
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
    </div>
  );
};

export default Pages;
