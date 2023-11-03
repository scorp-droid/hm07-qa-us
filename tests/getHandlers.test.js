// eslint-disable-next-line no-undef
const config = require('../config');

test("Should return 200 status code", async () => {
  //CREATE VARIABLE
  let actualStatusCode;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
    actualStatusCode = response.status;
  } catch (error) {
    console.error(error);
  }
  //UPDATE THIS BELOW
  expect(actualStatusCode).toBe(200);
});

//UPDATE THIS BELOW
test("Body should contain data from kit id 1", async () => {
  //CREATE VARIABLE
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  //UPDATE THIS BELOW
  expect(actualResponseBody.name).toBe("For picnic");
});