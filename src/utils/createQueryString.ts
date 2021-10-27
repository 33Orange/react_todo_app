export const createUrl = (url: string, params?: any): string => {
  let str = '?';
  if (params) {
    for (let key in params) {
      str += `${key}=${params[key]}&`;
    }
    return `${url}${str}`;
  }
  return `${url}`;
};
