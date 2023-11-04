// eslint-disable-next-line no-undef
const config = require("../config");

/* GET Test 1 checks that GETTING an existing order returns a 200 status code */
test("Should return 200 status code", async () => {
  let actualStatusCode;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
    actualStatusCode = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatusCode).toBe(200);
});

/* GET Test 2 checks that getting an existing order returns a 'name: For picnic' key value pair in the response body */
test("Body should contain data from kit id 1", async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponseBody.name).toBe("For picnic");
});
