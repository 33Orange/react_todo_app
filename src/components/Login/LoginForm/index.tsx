import * as React from 'react';
import { useCallback } from 'react';
import { Form, Field } from 'react-final-form';
import { IFormValue } from '../../../types/form';
import { TextField, Button } from '@mui/material';
import useStyles from './style';
import { I18nContext } from '../../../i18n';

interface Props {
  handleLogin: (value: IFormValue) => void;
}

const LoginForm = ({ handleLogin }: Props) => {
  const { translate } = React.useContext(I18nContext);

  const validateEmail = useCallback((email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }, []);

  const handleValidate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = translate('required');
    }
    if (values.email && !validateEmail(values.email)) {
      errors.email = translate('not_valid_email');
    }
    if (!values.password) {
      errors.password = translate('required');
    }
    if (
      (values.password && values.password.length < 3) ||
      (values.password && values.password.length > 10)
    ) {
      errors.password = translate('min_max_length_pass');
    }
    return errors;
  };

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
                <TextField {...input} label={translate('email')} variant="outlined" type="email" />
                {meta.error && meta.touched && (
                  <label className={classes.validateError}>{meta.error}</label>
                )}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div className={classes.inputContainer}>
                <TextField
                  {...input}
                  label={translate('password')}
                  variant="outlined"
                  type="password"
                />
                {meta.error && meta.touched && (
                  <label className={classes.validateError}>{meta.error}</label>
                )}
              </div>
            )}
          </Field>
          <Button variant="contained" type="submit">
            {translate('login')}
          </Button>
        </form>
      )}
    />
  );
};

export default React.memo(LoginForm);
