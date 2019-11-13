const solution = require('../20.ValidParentheses');
const testExample = [
  {
    input: "()",
    output: true
  },
  {
    input: "()[]{}",
    output: true
  },
  {
    input: "(]",
    output: false
  },
  {
    input: "([)]",
    output: false
  },
  {
    input: "{[]}",
    output: true
  },
  {
    input: "()",
    output: true
  },
  {
    input: "([)",
    output: false
  },
  {
    input: "",
    output: true
  },
  {
    input: "]()",
    output: false
  },
  {
    input: "]",
    output: false
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