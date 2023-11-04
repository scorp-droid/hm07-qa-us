// eslint-disable-next-line no-undef
const config = require("../config");

/* DELETE Test 1 checks that deleting an existing order returns a 200 status code */
test("Status code should be 200", async () => {
  let actualStatusCode;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
      method: "DELETE",
    });
    actualStatusCode = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatusCode).toBe(200);
});

/* DELETE Test 2 checks that deleting an existing order returns an 'ok: true' key value pair in the response body*/
test("Response body should contain true response)", async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(requestBody),
    });
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponseBody["ok"]).toBe("true");
});
