export interface IPaymentBase {
  payeeId: string;
  payerId: string;
  paymentSystem: string;
  paymentMethod: string;
  amount: number;
  currency: string;
  comment?: string;
  id: string;
}

export interface ICreatePayment extends IPaymentBase {}

export interface IPayment extends IPaymentBase {
  created: string;
  updated: string;
  status: string;
}
