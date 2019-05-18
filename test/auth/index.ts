import { assert } from 'chai';
import * as nock from 'nock';
import API from '../../src';
import {
  authTokenExp,
  loginAndPassword,
  noAuthToken,
  successAuth,
} from './data';

const api = new API({
  host: 'http://localhost:3000',
  version: 'v1',
});

const server = nock(`${api.uri}`);
describe('Check uri', () => {
  it('should generate requestcorrect link to REST', () => {
    assert.equal(api.uri, 'http://localhost:3000/v1');
  });
});

describe('Authentication POST /v1/authenticate', () => {
  it('Success auth', async () => {
    server.post('/authenticate').reply(200, successAuth);
    const token = await api.authentication(loginAndPassword);
    assert.deepEqual(token, successAuth);
  });
  // it('No auth token provided', async () => {
  //   server.get('/authenticate').reply(401, noAuthToken);
  //   const token = await api.authentication(loginAndPassword);
  //   assert.equal(token, noAuthToken);
  // });
  // it('Auth token expired', async () => {
  //   server.get('/authenticate').reply(401, authTokenExp);
  //   const token = await api.authentication(loginAndPassword);
  //   assert.equal(token, authTokenExp);
  // });
});
