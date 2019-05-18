import { assert } from 'chai';
import * as nock from 'nock';
import API from '../../src';

import {
  errPaymentAlreadyApproved,
  errPaymentAlreadyCanceled,
  expList,
  expPayment,
  idPayment,
  newPaymentBase,
  notValidPayment,
} from './data';

const api = new API({
  host: 'http://localhost:3000',
  version: 'v1',
});

const server = nock(`${api.uri}`);
describe('Payments', () => {
  describe('List payments GET /v1/payments', () => {
    it('List is empty', async () => {
      server.get('/payments').reply(200, []);
      const payments = await api.payments.list();
      assert.equal(payments.length, 0);
    });
    it('List has 2 items', async () => {
      server.get('/payments').reply(200, expList);
      const payments = await api.payments.list();
      assert.deepEqual(payments, expList);
    });
  });

  describe('Create payment POST /v1/payments', () => {
    it('Payment created', async () => {
      server.post('/payments').reply(201, expPayment);
      const newPayment = await api.payments.create(newPaymentBase);
      assert.deepEqual(newPayment, expPayment);
    });
    // it('Not valid payment', async () => {
    //   server.get('/payments').reply(400, notValidPayment);
    //   const payment = await api.payments.list();
    //   assert.equal(payment, notValidPayment);
    // });
  });

  describe('Get payment Get /v1/payments/:id', () => {
    it('Payment received', async () => {
      server.get(`/payments/${idPayment}`).reply(200, expPayment);
      const payment = await api.payments.get(idPayment);
      assert.deepEqual(payment, expPayment);
    });
    it('Payment not found', async () => {
      server.get(`/payments/${idPayment}`).reply(200, {});
      const payment = await api.payments.get(idPayment);
      assert.deepEqual(payment, {});
    });
  });

  describe('Approve payment PUT /v1/payments/:id/approve', () => {
    it('Payment approved', async () => {
      server.put(`/payments/${idPayment}/approve`).reply(200);
      const payment = await api.payments.approve(idPayment);
      assert.equal(Object.keys(payment).length, 0);
    });
    // it('Payment already canceled', async () => {
    //   server
    //     .put(`/payments/${idPayment}/approve`)
    //     .reply(400, errPaymentAlreadyCanceled);
    //   const payment = await api.payments.approve(idPayment);
    //   assert.deepEqual(payment, errPaymentAlreadyCanceled);
    // });
  });

  describe('Cancel payment PUT /v1/payments/:id/cancel', () => {
    it('Payment canceled', async () => {
      server.put(`/payments/${idPayment}/cancel`).reply(200);
      const payment = await api.payments.cancel(idPayment);
      assert.equal(Object.keys(payment).length, 0);
    });
    // it('Payment already approved', async () => {
    //   server
    //     .put(`/payments/${idPayment}/cancel`)
    //     .reply(200, errPaymentAlreadyApproved);
    //   const payment = await api.payments.cancel(idPayment);
    //   assert.equal(payment, errPaymentAlreadyApproved);
    // });
  });
});
