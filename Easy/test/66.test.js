const solution = require('../66.PlusOne');
const testExample = [
  {
    input: [4, 3, 2, 1],
    output: ['4', '3', '2', '2']
  },
  {
    input: [1, 2, 3],
    output: ['1', '2', '4']
  },
  {
    input: [9],
    output: ['1', '0']
  },
  {
    input: [9, 9],
    output: ['1', '0', '0']
  },
  {
    input: [1, 2, 9],
    output: ['1', '3', '0']
  }
];


describe.each(testExample)(
  'PlusOne test',
  (testCase) => {
    let input = testCase.input;
    let expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input)).toEqual(expected)
    })
  }
)