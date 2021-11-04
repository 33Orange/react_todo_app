export interface IUser {
  email: string;
  id: string;
}

export interface IResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
