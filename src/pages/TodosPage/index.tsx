import * as React from 'react';
import TodosList from '../../components/TodosList';
import Page from '../../components/Page';

const TodosPage = () => {
  return (
    <Page title="todos">
      <TodosList />
    </Page>
  );
};

export default TodosPage;
