'use strict';

const passwordRules = require('../helpers/password-rules');

const handler = async (event) => {

  const requestBody = JSON.parse(event.body);

  try {

    if(!requestBody || !requestBody.password) {
      throw new Error("Body parameter password is required.");
    }

    const { password } = requestBody;

    let allRulesOk = true;
    for (let rule of Object.keys(passwordRules)) {
      allRulesOk = await passwordRules[rule](password);
  
      if(!allRulesOk) break;
    }
  
    return {
      statusCode: 200,
      body: allRulesOk,
    };

  } catch(e) {

    return {
      statusCode: 500,
      body: e.message,
    };
  }
};

module.exports = { handler };
