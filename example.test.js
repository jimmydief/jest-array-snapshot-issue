test("example", () => {
  const data = [{ name: "One" }, { name: "Two" }, { name: "Three" }];

  expect(data).toMatchInlineSnapshot(
    [{}, {}, { name: expect.any(String) }],
    `
    Array [
      Object {
        "name": "One",
      },
      Object {
        "name": "Two",
      },
      Object {
        "name": "Three",
      },
    ]
  `
  );
});
