const solution = require('../38.CountAndSay');
const testExample = [
  {
    input: 4,
    output: "1211"
  },
  {
    input: 1,
    output: "1"
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
  'Count and Array test',
  (testCase) => {
    let input = testCase.input;
    let expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input.haystack, input.needle)).toBe(expected)
    })
  }
)