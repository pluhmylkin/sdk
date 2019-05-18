import * as rp from 'request-promise';
import Payments from './entities/payments';
import {
  IConfig,
  ILoginRequest,
  ILoginResponse,
} from './interfaces/authentication';
import { IError } from './interfaces/errors';

/**
 * @example
 * new API({ host: 'http://localhost', version: 'v1' });
 */
export default class API {
  /**
   * @description Work with payments
   * @example GET /v1/payment/:id:
   * api.payments.get(id);
   */
  public payments: Payments;

  /** Base uri for REST server */
  public uri: string;

  /**
   * @description Create client
   * @param {IConfig} config Configuration Initializer {uri:
   */
  constructor(config: IConfig) {
    this.uri = `${config.host}/${config.version}`;
    this.payments = new Payments(this.uri);
  }

  /**
   * @description Issues a temporary authentication token that can be used for the rest of the calls
   * @param {ILoginRequest} loginData login and password
   */
  public authentication(loginData: ILoginRequest): ILoginResponse {
    const uri = `${this.uri}/authenticate`;
    return rp({
      body: loginData,
      json: true,
      method: 'POST',
      uri,
    }).catch((err: IError) => {
      return err;
    });
  }
}
