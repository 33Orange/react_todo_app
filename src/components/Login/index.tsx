import * as React from 'react';
import LoginForm from './LoginForm';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  loginPage: {
    width: 450,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  loginPage__title: {
    textAlign: 'center',
    fontSize: 80,
    fontWeight: 300,
    color: 'rgba(255, 0, 0, 0.2)',
    width: '100%',
    margin: '50px 0',
  },
});

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.loginPage}>
      <h1 className={classes.loginPage__title}>welcome</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
