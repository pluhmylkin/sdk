import { IError } from '../../src/interfaces/errors';
import { IPayment, IPaymentBase } from '../../src/interfaces/payments';

export const newPaymentBase: IPaymentBase = {
  amount: 1337.01,
  comment: null,
  currency: 'RUB',
  id: '9781bd16-8221-4eb6-a37f-2eb60acc1338',
  payeeId: 'a5b500e1-2ba7-4623-baa2-e09b6a721b5e',
  payerId: 'd8f090ae-a4ed-42dc-9181-f51564d0e304',
  paymentMethod: 'PMB',
  paymentSystem: 'yandexMoney',
};
export const notValidPayment = {
  amount: 1337.01,
  comment: null,
  currency: 'RUB',
  id: '9781bd16-8221-4eb6-a37f-2eb60acc1338',
  payeeId: 'a5b500e1-2ba7-4623-baa2-e09b6a721b5e',
  payerId: 'd8f090ae-a4ed-42dc-9181-f51564d0e304',
  paymentSystem: 'yandexMoney',
};

export const errNotValidPayment: IError = {
  code: 'ERR_VALIDATION',
  details: [
    {
      message: 'amount field is required',
      path: ['amount'],
      value: 'null',
    },
  ],
  message: 'Validation failed',
};
export const errPaymentAlreadyCanceled: IError = {
  code: 'ERR_CANNOT_APPROVE',
  message: 'Cannot approve a payment that has already been can celled',
};
export const errPaymentAlreadyApproved: IError = {
  code: 'ERR_CANNOT_CANCEL,',
  message: 'Cannot cancel a payment that has already been approved',
};

export const expPayment: IPayment = {
  ...newPaymentBase,
  created: '2018-03-09T11:26:14.805Z',
  status: 'created',
  updated: '2018-03-09T11:31:14.666Z',
};

export const expList: IPayment[] = [{ ...expPayment }, { ...expPayment }];

export const idPayment: string = 'wed32d32e23e32';
