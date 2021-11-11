import * as React from 'react';
import { useState, useCallback } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import useStyles from './style';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import { registerUserAction, loginUserAction } from '../../redux/actionCreators/userActionCreator';

import { IFormValue } from '../../types/form';
import { authorizationErrorSelector } from '../../redux/selectors';
import { I18nContext } from '../../i18n';

const Login = () => {
  const { translate } = React.useContext(I18nContext);
  const authorizationError = useTypedSelector(authorizationErrorSelector);
  const [isRegister, setIsRegister] = useState(true);

  const dispatch = useDispatch();

  const handleRedirectToRegister = () => {
    setIsRegister(false);
  };

  const handleRedirectToLogin = () => {
    setIsRegister(true);
  };

  const handleRegister = useCallback((value: IFormValue) => {
    dispatch(registerUserAction.request(value));
  }, []);

  const handleLogin = useCallback((value: IFormValue) => {
    dispatch(loginUserAction.request(value));
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isRegister ? (
        <React.Fragment>
          <LoginForm handleLogin={handleLogin} />
          <span className={classes.link} onClick={handleRedirectToRegister}>
            {translate('or_register')}
          </span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <RegisterForm handleRegister={handleRegister} />
          <span className={classes.link} onClick={handleRedirectToLogin}>
            {translate('or_login')}
          </span>
        </React.Fragment>
      )}
      <span className={classes.authorizationError}>{authorizationError}</span>
    </div>
  );
};

export default React.memo(Login);
