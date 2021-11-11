import * as React from 'react';
import Login from '../../components/Login';
import Page from '../../components/Page';
import { I18nContext } from '../../i18n';

const LoginPage = () => {
  const { translate } = React.useContext(I18nContext);
  return (
    <Page title={translate('welcome')}>
      <Login />
    </Page>
  );
};

export default LoginPage;
