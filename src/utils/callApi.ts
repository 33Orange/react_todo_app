import { baseUrl } from '../constans/serverUrl';
import { createUrl } from './createQueryString';

interface ICallApiOptions {
  method: string;
  body?: {};
}

export const callApi = async (endpoint: string, options: ICallApiOptions = { method: 'get' }) => {
  const valueToSend = JSON.stringify(options.body);
  const response = await fetch(createUrl(`${baseUrl}${endpoint}`), {
    method: options.method,
    headers: { 'Content-Type': 'application/json' },
    body: valueToSend,
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
};
