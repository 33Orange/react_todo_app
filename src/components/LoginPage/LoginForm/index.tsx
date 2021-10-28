import * as React from 'react';
import { TextField, Button } from '@mui/material';
import './style.scss';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <div className="login-form">
      <div className="login-form__input-cont">
        <TextField id="email-input" label="Email" variant="outlined" type="email" />
        <TextField id="password-input" label="Password" variant="outlined" type="password" />
      </div>
      <div className="login-form__button-cont">
        <Button variant="contained">Login</Button>
        <Button variant="outlined">Register</Button>
      </div>
    </div>
  );
};

export default LoginForm;
