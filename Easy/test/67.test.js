const solution = require('../67.AddBinary');
const testExample = [
  {
    input: {
      a: "11",
      b: "1"
    },
    output: "100"
  },
  {
    input: {
      a: "1010",
      b: "1011"
    },
    output: "10101"
  },
  {
    input: {
      a: "10101",
      b: "1011"
    },
    output: "100000"
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