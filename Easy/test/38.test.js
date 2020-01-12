const solution = require('../38.CountAndSay');
const testExample = [
  {
    input: 1,
    output: "1"
  },
  {
    input: 2,
    output: "11"
  },
  {
    input: 3,
    output: "21"
  },
  {
    input: 4,
    output: "1211"
  },
  {
    input: 5,
    output: "111221"
  },
  {
    input: 6,
    output: "312211"
  },
  {
    input: 7,
    output: "13112221"
  },
  {
    input: 8,
    output: "1113213211"
  },
  {
    input: 9,
    output: "31131211131221"
  },
  {
    input: 10,
    output: "13211311123113112211"
  },
];


describe.each(testExample)(
  'Count and Array test',
  (testCase) => {
    let input = testCase.input;
    let expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input)).toBe(expected)
    })
  }
)