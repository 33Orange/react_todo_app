import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Page from './page';
import TodoList from '../components/TodosList';
import Login from '../components/Login';

interface PagesProps {}

const Pages: React.FC<PagesProps> = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Page title="welcome">
            <Login />
          </Page>
        </Route>

        <Route path="/todos">
          <Page title="todos">
            <TodoList />
          </Page>
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Pages;
