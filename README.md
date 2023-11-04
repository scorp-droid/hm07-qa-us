# Sprint 7 project
Overview
This is project 7 of TripleTen's QA bootcamp. This project taught aspiring QA engineers how to write automated tests using NPM and JavaScript.
This project uses an API to test making changes, such as deleting, getting, posting and putting 'kits or orders' to the project's API, Urban Grocers.


Installation
To install the project's dependencies, use the following command:
npm install
This will install all the necessary packages and libraries required for the project.

Configuration
Before running the tests, make sure to set the test URL in the configuration file. Locate the config.js file in the project directory and update the TEST_URL variable with the appropriate test URL:
// config.js
module.exports = {
    TEST_URL: 'https://example.com/test',
    // ... other configuration options
};

How to Run Tests
To run the test suite, use the following command:
npx jest or npx jest fileName.js
This command will execute the tests and provide the test results, including any failures or errors.

Code Style
Coding language is JavaScript. Each file has two tests, one for the status code and another for the response body, per each API endpoint tested (delete, get, post, put).