const solution = require('../21.MergeTwoSortedLists');
const testExample = [
  {
    input: [[1, 2, 4], [1, 3, 4]],
    output: [1, 1, 2, 3, 4, 4]
  },
  {
    input: [[1, 1, 1], [2, 2, 3, 4]],
    output: [1, 1, 1, 2, 2, 3, 4]
  },
  {
    input: [[3, 7, 8], [1, 2, 3, 4]],
    output: [1, 2, 3, 3, 4, 7, 8]
  },
  {
    input: [[], [2, 3, 4]],
    output: [2, 3, 3]
  },
  {
    input: [[3, 3, 3], []],
    output: []
  },
];

describe.each(testExample)(
  'MergeTwoSortedLists test',
  (testCase) => {
    let input1 = testCase.input[0];
    let input2 = testCase.input[1];
    let expected = testCase.output;

    test(`Test [${input1, input2}] to be ${expected}`, () => {
      expect(solution(input1, input2)).toEqual(expect.arrayContaining(expected));
    })
  }
)