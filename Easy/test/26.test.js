const solution = require('../26.RemoveDuplicatesFromSortedArray');
const testExample = [
  // Individual Test Case
  {
    input: [0, 0, 0, 1, 1, 2, 3],
    output: [0, 1, 2, 3]
  },
  {
    input: [],
    output: []
  },
  {
    input: [0, 4, 4, 7, 7, 9],
    output: [0, 4, 7, 9]
  },
  // Leetcode Test Case
  {
    input: [1, 1, 2],
    output: [1, 2]
  }
];


describe.each(testExample)(
  'RemoveDuplicatesFromSortedArray test',
  (testCase) => {
    let input = testCase.input;
    let expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input)).toEqual(expected)
    })
  }
)