'use strict';

const { expect } = require('chai');
const ValidatePassword = require('../../handlers/ValidatePassword');

let mockDependencies;
describe('Unit tests for ValidatePassword Class', () => {
  beforeEach('create request input', () => {
    mockDependencies = {
      body: {
        password: "",
      },
    };
  });

  context('validate passwords', () => {
    it('should invalidate a empty password', async () => {
      mockDependencies.body = JSON.stringify(mockDependencies.body)
      const ret = await ValidatePassword.handler(mockDependencies);
      expect(ret.body).to.be.false;
    });

    it('should invalidate a password with only 2 characters repetead', async () => {
      mockDependencies.body.password = "aa";
      mockDependencies.body = JSON.stringify(mockDependencies.body)
      const ret = await ValidatePassword.handler(mockDependencies);
      expect(ret.body).to.be.false;
    });

    it('should invalidate a password with only 2 characters', async () => {
      mockDependencies.body.password = "ab";
      mockDependencies.body = JSON.stringify(mockDependencies.body)
      const ret = await ValidatePassword.handler(mockDependencies);
      expect(ret.body).to.be.false;
    });

    it('should invalidate a password with only 8 characters', async () => {
      mockDependencies.body.password = "AAAbbbCc";
      mockDependencies.body = JSON.stringify(mockDependencies.body)
      const ret = await ValidatePassword.handler(mockDependencies);
      expect(ret.body).to.be.false;
    });

    it('should invalidate a password with 9 characters but with repeated characters', async () => {
      mockDependencies.body.password = "AbTp9!foo";
      mockDependencies.body = JSON.stringify(mockDependencies.body)
      const ret = await ValidatePassword.handler(mockDependencies);
      expect(ret.body).to.be.false;
    });

    it('should invalidate a password without special character', async () => {
      mockDependencies.body.password = "AbTp9jfoo";
      mockDependencies.body = JSON.stringify(mockDependencies.body)
      const ret = await ValidatePassword.handler(mockDependencies);
      expect(ret.body).to.be.false;
    });

    it('should validate a password', async () => {
      mockDependencies.body.password = "AbTp9!fok";
      mockDependencies.body = JSON.stringify(mockDependencies.body)
      const ret = await ValidatePassword.handler(mockDependencies);
      expect(ret.body).to.be.true;
    });

    it('should return an error because no password parameter was sent', async () => {
      delete mockDependencies.body.password;
      mockDependencies.body = JSON.stringify(mockDependencies.body)
      const ret = await ValidatePassword.handler(mockDependencies);
      expect(ret.body).to.be.a('string');
      expect(ret.body).to.be.equals('Body parameter password is required.');
    });
  });
});
