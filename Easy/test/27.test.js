const solution = require('../27.RemoveElement');
const testExample = [
  {
    input: {
      nums: [0, 0, 0, 1, 1, 2, 3],
      val: 2
    },
    output: 6
  },
  {
    input: {
      nums: [3, 2, 2, 3],
      val: 3
    },
    output: 2
  },
  {
    input: {
      nums: [0, 1, 2, 2, 3, 0, 4, 2],
      val: 2
    },
    output: 5
  }
];


describe.each(testExample)(
  'RemoveElement test',
  (testCase) => {
    let input = testCase.input;
    let expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input.nums, input.val)).toBe(expected)
    })
  }
)