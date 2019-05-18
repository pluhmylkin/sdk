import {
  ILoginRequest,
  ILoginResponse,
} from '../../src/interfaces/authentication';
import { IError } from '../../src/interfaces/errors';

export const loginAndPassword: ILoginRequest = {
  password: 'suchPassw0rdSecure',
  username: 'serious_business',
};

export const successAuth: ILoginResponse = {
  authToken: 'fJizPj8LxL3eKOy1GEIMPcdPQqgxN42oprukdHLu8jgbV',
  expiresIn: '2017-01-22T11:26:14.805Z',
};
export const noAuthToken: IError = {
  code: 'ERR_UNATHORIZED',
  message: 'No auth token provided',
};
export const authTokenExp: IError = {
  code: 'ERR_AUTH_TOKEN_EXPIRED',
  message: 'Auth token expired',
};
