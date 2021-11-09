import * as React from 'react';
import { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import useStyles from './style';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import {
  registerUserRequest,
  loginUserRequest,
} from '../../redux/actionCreators/userActionCreator';

import { IFormValue } from '../../types/form';

export default React.memo(function Login() {
  const { authorizationError } = useTypedSelector(state => state);
  const [isRegister, setIsRegister] = useState(true);

  const dispatch = useDispatch();

  const handleRedirectToRegister = () => {
    setIsRegister(false);
  };
  const handleRedirectToLogin = () => {
    setIsRegister(true);
  };

  const handleRegister = (value: IFormValue) => {
    dispatch(registerUserRequest(value));
  };

  const handleLogin = (value: IFormValue) => {
    dispatch(loginUserRequest(value));
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isRegister ? (
        <React.Fragment>
          <LoginForm handleLogin={handleLogin} />
          <a className={classes.link} onClick={handleRedirectToRegister}>
            Or u want register?
          </a>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <RegisterForm handleRegister={handleRegister} />
          <a className={classes.link} onClick={handleRedirectToLogin}>
            Or u want login?
          </a>
        </React.Fragment>
      )}
      <span className={classes.authorizationError}>{authorizationError}</span>
    </div>
  );
});
