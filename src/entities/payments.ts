import * as rp from 'request-promise';
import { IError } from '../interfaces/errors';
import { ICreatePayment, IPayment } from '../interfaces/payments';

/**
 * Class for work with payments
 */
export default class Payments {
  /** REST uri for payments requests */
  private uri: string;

  constructor(uri: string) {
    this.uri = `${uri}/payments`;
  }

  /**
   * @description Returns the list of existing payments.t
   * @returns list of payments
   */
  public list(): IPayment[] {
    return rp({
      json: true,
      method: 'GET',
      uri: this.uri,
    }).catch((err: IError) => {
      return err;
    });
  }

  /**
   * @description Returns an existing payment
   * @param {string} id id of payment
   * @returns payment
   */
  public get(id: string): IPayment {
    this.checkId(id);
    const uri = `${this.uri}/${id}`;
    return rp({
      json: true,
      method: 'GET',
      uri,
    }).catch((err: IError) => {
      return err.message;
    });
  }

  /**
   * @description Creates a new payment
   * @param {ICreatePayment} newPayment
   * @returns created payment
   */
  public create(newPayment: ICreatePayment): IPayment {
    return rp({
      body: newPayment,
      json: true,
      method: 'POST',
      uri: this.uri,
    }).catch((err: IError) => {
      return err;
    });
  }

  /**
   * @description Cancels a created payment that hasn’t been approved yet.
   * @param {string} id id of payment
   */
  public cancel(id: string) {
    this.checkId(id);
    const uri = `${this.uri}/${id}/cancel`;
    return rp({
      method: 'PUT',
      uri,
    }).catch((err: IError) => {
      return err;
    });
  }

  /**
   * @description Approves a payment, effectively it moves money from a payer account to a payee account.
   * @param {string} id id of payment
   */
  public approve(id: string) {
    this.checkId(id);
    const uri = `${this.uri}/${id}/approve`;
    return rp({
      method: 'PUT',
      uri,
    }).catch((err: IError) => {
      return err;
    });
  }

  /**
   * @description check base validation
   * @param {string} id id of payment
   */
  private checkId(id: string) {
    if (!id || id.trim() === '') {
      throw new Error('id is empthy');
    }
  }
}
