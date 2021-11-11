import * as React from 'react';
import TodosList from '../../components/TodosList';
import Page from '../../components/Page';
import { I18nContext } from '../../i18n';

const TodosPage = () => {
  const { translate } = React.useContext(I18nContext);
  return (
    <Page title={translate('todos')}>
      <TodosList />
    </Page>
  );
};

export default TodosPage;
