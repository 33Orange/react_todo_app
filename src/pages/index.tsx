import * as React from 'react';
import Page from './page';
import TodoList from '../components/TodosList';
import Login from '../components/Login';

interface PagesProps {}

const Pages: React.FC<PagesProps> = () => {
  return (
    <div>
      <Page>
        <TodoList />
      </Page>
      <Page>
        <Login />
      </Page>
    </div>
  );
};

export default Pages;
