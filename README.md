# ms-validate-password

A micro-service that receive a string and verify if it is a strong, secure and a valid password.
The handler receives a string and returns a boolean (true or false), according to the password rules.

This project was built for a specific challenge.
<br />

## Contents

- [Tech Stack](#techstack)  
- [Architecture](#architecture)  
- [Security](#security)  
- [How to run locally](#howrunlocally)  
&nbsp; - [Run service on localhost using VS Code](#runlocalhost)  
&nbsp; - [Run unit tests coverage](#runtestcoverage)  

<br />

## Tech Stack<a name="techstack"></a>

This is a serverless project, so I've choosed serverless-framework. I could use Java, C#, Python with this framework to deploy a stack on AWS, but I'd rather Javascript to write a simple web service, using Node.js engine.

- Node.js12.x (https://nodejs.org/en/)
- Serverless Framework 1.49.0 (https://www.serverless.com/)

<br /><br />

## Architecture<a name="architecture"></a>

This is a simple web service, so one of the most used architecture is a stack on AWS using API Gateway and Lambda function. I could DynamoDB as database, but in this case we dont need to access any data on databases.

![picture](src/docs/architecture.jpg)

<br /><br />

## Security<a name="security"></a>

Perhabs the application do not access or show users data, the function was set to private and only receives call with an API Key specified on API Gateway settings.

<br /><br />

## How to run locally<a name="runlocalhost"></a>

### Run service on localhost using VS Code<a name="runlocalhost"></a>
  First of all, you need to install serverless-framework.
  
  ```
  sudo npm install -g serverless
  ```

  Secondly, clone this repository on your machine. Open repository folder and run:

  ```
  npm install
  ```

  Then open the project on Visual Studio Code and start the debug with the launch.json configuration set on this repository, and serverless offline should start.


### Run unit tests coverage<a name="runtestcoverage"></a>
  In project's source folder, run:

  ```
  npm run test
  ```

