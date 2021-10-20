export const createUrl = (url, params) => {
  let str = '?';
  if (params) {
    for (let key in params) {
      str += `${key}=${params[key]}&`;
    }
    return `${url}${str}`;
  }
  return `${url}`;
};
