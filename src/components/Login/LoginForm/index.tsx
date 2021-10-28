import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button } from '@mui/material';

const useStyles = makeStyles({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    boxShadow: `0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 
      0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2), 1px 3px 5px rgba(0, 0, 0, 0.4)`,
  },
  loginForm__inputCont: {
    display: 'flex',
    margin: 2,
  },
  loginForm__buttonCont: {
    margin: '15px 0',
    width: '60%',
    display: 'flex',
    justifyContent: 'space-around',
  },
});
interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const classes = useStyles();
  return (
    <div className={classes.loginForm}>
      <div className={classes.loginForm__inputCont}>
        <TextField id="email-input" label="Email" variant="outlined" type="email" />
        <TextField id="password-input" label="Password" variant="outlined" type="password" />
      </div>
      <div className={classes.loginForm__buttonCont}>
        <Button variant="contained">Login</Button>
        <Button variant="outlined">Register</Button>
      </div>
    </div>
  );
};

export default LoginForm;
