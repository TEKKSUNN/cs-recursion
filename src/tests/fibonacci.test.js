import { fibs, fibsRec } from "./fibonacci";
import runTest from "./test-helpers";

it('Fibonacci:normal works as expected', () => {
  const testCases = [
    {
      test: 8,
      res: [0, 1, 1, 2, 3, 5, 8, 13],
    },
    {
      test: 3,
      res: [0, 1, 1]
    },
    {
      test: 1,
      res: [0]
    },
  ];
  runTest(testCases, fibs);
});

it('Fibonacci:recursive works as expected', () => {
  const testCases = [
    {
      num: 8,
      res: [0, 1, 1, 2, 3, 5, 8, 13],
    },
    {
      num: 3,
      res: [0, 1, 1]
    },
    {
      num: 1,
      res: [0]
    },
  ];
  runTest(testCases, fibsRec);
});
