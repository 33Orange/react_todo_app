import { baseUrl } from '../constants/serverUrl';
import { createUrl } from './createQueryString';

interface ICallApiOptions {
  method: string;
  body?: {};
}

export const callApi = async (endpoint: string, options: ICallApiOptions = { method: 'get' }): Promise<any> => {
  const valueToSend = JSON.stringify(options.body);
  const response = await fetch(createUrl(`${baseUrl}${endpoint}`), {
    method: options.method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    credentials: 'include',
    body: valueToSend,
  });
  if (response.ok) {
    return response.json();
  }
  if (response.status == 400) {
    const error = await response.json();
    throw Error(error.message);
  }
  if (response.status == 419) {
    console.log(response.status);
    throw response.status;
  }

  if (response.status == 401) {
    const newResponse = await fetch(createUrl(`${baseUrl}/refresh`), {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    if (newResponse.ok) {
      const json = await newResponse.json();
      localStorage.setItem('token', json.accessToken);
      return await callApi(endpoint, options);
    }
  }
};
