const solution = require('../21.MergeTwoSortedLists');
const testExample = [
  {
    Input: [[1, 2, 4], [1, 3, 4]],
    Output: [1, 1, 2, 3, 4, 4]
  },
];

describe.each(testExample)(
  'MergeTwoSortedLists test',
  (testCase) => {
    let input1 = testCase.input[0];
    let input2 = testCase.input[1];
    let expected = testCase.output;

    test(`Test [${input1, input2}] to be ${expected}`, () => {
      expect(solution(input1, input2)).toBe(expected)
    })
  }
)