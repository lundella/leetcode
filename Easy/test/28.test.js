const solution = require('../27.ImplementStrStr');
const testExample = [
  {
    input: {
      haystack: "hello",
      needle: "ll"
    },
    output: 2
  },
  {
    input: {
      haystack: "aaaaa",
      needle: "bba"
    },
    output: -1
  },
];


describe.each(testExample)(
  'ImplementStrStr test',
  (testCase) => {
    let input = testCase.input;
    let expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input.haystack, input.needle)).toBe(expected)
    })
  }
)