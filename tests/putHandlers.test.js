// eslint-disable-next-line no-undef
const config = require("../config");

const requestBody = {
  productsList: [
    {
      id: 13,
      quantity: 2,
    },
  ],
};

/* PUT Test 1 checks that updating an existing order returns a 200 status code */
test("Status code should be 200", async () => {
  let actualStatusCode;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders/13`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualStatusCode = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatusCode).toBe(200);
});

/* GET Test 2 checks that updating an existing order returns a 'courierService: Order and Go' key value pair in the response body */
test("Response body should contain the type of service, e.g. courier)", async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders/13`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponseBody["courierService"]).toBe("Order and Go");
});
