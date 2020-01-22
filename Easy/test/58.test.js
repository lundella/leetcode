const solution = require('../58.LengthofLastWord');
const testExample = [
  {
    input: "Hello World",
    output: 5
  },
  {
    input: " ",
    output: 0
  },
  {
    input: "b   a    ",
    output: 1
  },
  {
    input: "    day",
    output: 3
  }
];


describe.each(testExample)(
  'Length of Last Word',
  (testCase) => {
    let input = testCase.input;
    let expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input)).toBe(expected)
    })
  }
)