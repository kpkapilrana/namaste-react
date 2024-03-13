import { sum } from "../components/sum";

test("Sum function calculate sum of two numbers", () => {
  const result = sum(2, 3);

  //Assertion
  expect(result).toBe(5);
});
