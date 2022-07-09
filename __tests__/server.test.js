// Assertion - check for an expected result
'use strict';

const { it, expect } = require('@jest/globals');
const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('Node Server', () => {

  it('says hello world', async () => {
    //set up test
    //perform action
    //expect result
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World');
  });

  it('returns some data', async () => {
    const response = await request.get('/data');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: 'Zayah',
      role: 'Student',
    });
  });
});
