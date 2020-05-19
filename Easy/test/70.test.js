const solution = require('../70.ClimbingStairs');
const testExample = [
  {
    input: 2,
    output: 2
  },
  {
    input: 3,
    output: 3
  }
];

describe.each(testExample)(
  'Climbing Stairs',
  (testCase) => {
    const input = testCase.input;
    const expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input)).toBe(expected)
    })
  }
)