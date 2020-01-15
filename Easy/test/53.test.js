const solution = require('../53.MaximumSubarray');
const testExample = [
  {
    input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    output: 6
  }
];


describe.each(testExample)(
  'Maximum Subarray',
  (testCase) => {
    let input = testCase.input;
    let expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input)).toBe(expected)
    })
  }
)