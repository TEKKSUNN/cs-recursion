import mergeSort from "../modules/merge-sort";
import runTest from "./test-helpers";

it("Merge sort works as expected", () => {
  const testCases = [
    {
      test: [9, 8, 7, 6, 4, 2, 1, 3, 5],
      res: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      test: [44, 55, 109, 23, 80],
      res: [23, 44, 55, 80, 109],
    },
    {
      test: [1, 0],
      res: [0, 1],
    },
  ];
  runTest(testCases, mergeSort);
});
