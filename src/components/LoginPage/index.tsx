import * as React from 'react';
import LoginForm from './LoginForm';
import './style.scss';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className="login-page">
      <h1 className="login-page__title">welcome</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
