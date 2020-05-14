const solution = require('../69.Sqrt');
const testExample = [
  {
    input: 4,
    output: 2
  },
  {
    input: 8,
    output: 2
  },
  {
    input: 16,
    output: 4
  }
];

describe.each(testExample)(
  'Sqrt',
  (testCase) => {
    let input = testCase.input;
    let expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input)).toBe(expected)
    })
  }
)