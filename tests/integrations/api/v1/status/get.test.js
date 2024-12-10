test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updatedAt).toBeDefined(); // Ajuste para camelCase: updatedAt

  const parseUpdatedAt = new Date(responseBody.updatedAt).toISOString();
  expect(responseBody.updatedAt).toEqual(parseUpdatedAt); // Consistência na chave
});
