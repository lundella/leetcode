const solution = require('../26.RemoveDuplicatesFromSortedArray');
const testExample = [
  {
    input: [0, 0, 0, 1, 1, 2, 3],
    output: 4
  }
];


describe.each(testExample)(
  'ValidParentheses test',
  (testCase) => {
    let input = testCase.input;
    let expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input)).toBe(expected)
    })
  }
)