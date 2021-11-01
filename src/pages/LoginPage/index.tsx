import * as React from 'react';
import { TextField, Button } from '@mui/material';
import useStyles from './style';
import Page from '../../components/Page';

const Login = () => {
  const classes = useStyles();
  return (
    <Page title="welcome">
      <div className={classes.root}>
        <div className={classes.inputCont}>
          <TextField id="email-input" label="Email" variant="outlined" type="email" />
          <TextField id="password-input" label="Password" variant="outlined" type="password" />
        </div>
        <div className={classes.buttonCont}>
          <Button variant="contained">Login</Button>
          <Button variant="outlined">Register</Button>
        </div>
      </div>
    </Page>
  );
};

export default Login;
