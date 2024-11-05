export default function runTest(testCases, callbackfn) {
  testCases.forEach((testCase) => {
    expect(callbackfn(testCase.test)).toStrictEqual(testCase.res);
  });
}
