export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  authToken: string;
  expiresIn: string;
}

export interface IConfig {
  version: string;
  host: string;
}
