import * as React from 'react';
import { useCallback } from 'react';
import { Form, Field } from 'react-final-form';
import { IFormValue } from '../../../types/form';
import { TextField, Button } from '@mui/material';
import useStyles from './style';

interface Props {
  handleLogin: (value: IFormValue) => void;
}

const LoginForm = ({ handleLogin }: Props) => {
  const validateEmail = useCallback((email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }, []);

  const handleValidate = useCallback((values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    if (values.email && !validateEmail(values.email)) {
      errors.email = 'Not valid email';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    if (
      (values.password && values.password.length < 3) ||
      (values.password && values.password.length > 10)
    ) {
      errors.password = 'Min length: 3, Max length: 10';
    }
    return errors;
  }, []);

  const classes = useStyles();
  return (
    <Form
      onSubmit={(values: IFormValue) => handleLogin(values)}
      validate={handleValidate}
      initialValues={{
        email: '',
        password: '',
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.root}>
          <Field name="email">
            {({ input, meta }) => (
              <div className={classes.inputContainer}>
                <TextField {...input} label="Email" variant="outlined" type="email" />
                {meta.error && meta.touched && (
                  <label className={classes.validateError}>{meta.error}</label>
                )}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div className={classes.inputContainer}>
                <TextField {...input} label="Password" variant="outlined" type="password" />
                {meta.error && meta.touched && (
                  <label className={classes.validateError}>{meta.error}</label>
                )}
              </div>
            )}
          </Field>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      )}
    />
  );
};

export default React.memo(LoginForm);
