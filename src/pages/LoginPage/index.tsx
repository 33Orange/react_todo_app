import * as React from 'react';
import { useState, useEffect } from 'react';

import { TextField, Button } from '@mui/material';
import useStyles from './style';
import Page from '../../components/Page';
import {
  registerUserRequest,
  loginUserRequest,
  logoutUserRequest,
  redirect,
} from '../../redux/actionCreators/userActionCreator';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [inputErorrs, setInputErrors] = useState('');

  const { isAuth, user } = useTypedSelector(state => state.user);
  const { redirectStatus } = useTypedSelector(state => state);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    if (redirectStatus) {
      handleRedirect();
    }
  }, [redirectStatus]);

  const handleRedirect = () => {
    history.push('/todos');
    dispatch(redirect(false));
  };
  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
    handleValidation();
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const registerUser = async () => {
    if (!formIsValid || passwordValue.length < 3) {
      return setInputErrors('Incorrect password or email!');
    }
    dispatch(registerUserRequest({ email: emailValue, password: passwordValue }));
    setInputErrors('');
    setEmailValue('');
    setPasswordValue('');
  };

  const login = () => {
    if (!formIsValid || passwordValue.length < 3) {
      return setInputErrors('Incorrect password or email!');
    }
    dispatch(loginUserRequest({ email: emailValue, password: passwordValue }));
    setInputErrors('');
    setEmailValue('');
    setPasswordValue('');
  };

  const logout = () => {
    dispatch(logoutUserRequest());
  };

  const handleValidation = () => {
    if (emailValue.length == 0) {
      setFormIsValid(false);
      return setInputErrors('Cannot be empty');
    }
    if (typeof emailValue !== 'undefined') {
      let lastAtPos = emailValue.lastIndexOf('@');
      let lastDotPos = emailValue.lastIndexOf('.');
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          emailValue.indexOf('@@') == -1 &&
          lastDotPos > 2 &&
          emailValue.length - lastDotPos > 2
        )
      ) {
        setFormIsValid(false);
        return setInputErrors('Email is not valid');
      }
    }
    setInputErrors('');
    return setFormIsValid(true);
  };

  const classes = useStyles();

  return (
    <Page title="welcome">
      <div className={classes.root}>
        <div className={classes.inputCont}>
          <TextField
            id="email-input"
            label="Email"
            variant="outlined"
            type="email"
            onChange={handleChangeLogin}
            value={emailValue}
          />
          <TextField
            id="password-input"
            label="Password"
            variant="outlined"
            type="password"
            onChange={handleChangePassword}
            value={passwordValue}
          />
        </div>
        <div>
          <span>{inputErorrs}</span>
        </div>
        <div className={classes.buttonCont}>
          <Button variant="contained" onClick={login}>
            Login
          </Button>
          <Button variant="outlined" onClick={registerUser}>
            Register
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default Login;
