const solution = require('../27.RemoveElement');
const testExample = [
  {
    input: {
      nums: [0, 0, 0, 1, 1, 2, 3],
      val: 2
    },
    output: 4
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