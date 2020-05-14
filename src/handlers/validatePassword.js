'use strict';

const handler = async (event) => {
  return {
    statusCode: 200,
    body: true,
  };
};

module.exports = { handler };
