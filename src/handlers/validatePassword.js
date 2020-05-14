'use strict';

const PasswordRules = require('../helpers/PasswordRules');

class ValidatePassword {

  static async handler(event) {
    const requestBody = JSON.parse(event.body);

    try {
  
      if(!requestBody || requestBody.password === undefined) {
        throw new Error("Body parameter password is required.");
      }
  
      const { password } = requestBody;
  
      const passwordRules = new PasswordRules();

      let allRulesOk = true;
      for (let rule of passwordRules.getRules()) {
        allRulesOk = await passwordRules[rule](password);
    
        if(!allRulesOk) break;
      }
    
      return {
        statusCode: 200,
        body: JSON.stringify(allRulesOk),
      };
  
    } catch(e) {
      return {
        statusCode: 500,
        body: JSON.stringify(e.message),
      };
    }
  }
};

module.exports = ValidatePassword;
