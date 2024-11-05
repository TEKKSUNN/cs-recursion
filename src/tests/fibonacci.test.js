import { fibs, fibsRec } from "./fibonacci";

function runTest(testCases, callbackfn) {
  testCases.forEach((testCase) => {
    expect(callbackfn(testCase.num)).toStrictEqual(testCase.res);
  });
}

it('Fibonacci:normal works as expected', () => {
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
