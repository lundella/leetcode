const solution = require('../67.AddBinary');
const testExample = [
  {
    input: {
      a: "1010",
      b: "1011"
    },
    output: "10101"
  }
];


describe.each(testExample)(
  'Add Binary',
  (testCase) => {
    let input = testCase.input;
    let expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input.a, input.b)).toBe(expected)
    })
  }
)