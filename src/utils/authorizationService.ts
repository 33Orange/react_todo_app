import { callApi } from './callApi';

class AuthorizationService {
  register = (email: string, password: string) => {
    return callApi('/registration', { method: 'post', body: { email, password } });
  };

  login = (email: string, password: string) => {
    return callApi('/login', { method: 'post', body: { email, password } });
  };

  logout = () => {
    return callApi('/logout', { method: 'post' });
  };

  checkAuth = async () => {
    return callApi('/refresh');
  };
}

export default new AuthorizationService();
