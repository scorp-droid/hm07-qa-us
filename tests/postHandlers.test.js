// eslint-disable-next-line no-undef
const config = require("../config");

const requestBody = {
  "productsList": [
    {
      "id": 4,
      "quantity": 2
    }
  ]
}

test("Status code should be 201", async () => {
	let actualStatusCode;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
		actualStatusCode = response.status;
  } catch (error) {
    console.error(error);
  }
	expect(actualStatusCode).toBe(201);
});

//UPDATE THIS BELOW
test("Response body should contain the type of service, e.g. courier)", async () => {
  //CREATE VARIABLE
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  //UPDATE THIS BELOW
  expect(actualResponseBody["courierService"]).toBe("Order and Go");
});
