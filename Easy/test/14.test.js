const solution = require('../14.LongestCommonPrefix');

const testExample = [
  {
    input: ["c", "c"],
    output: "c"
  },
  {
    input: ["a", "b"],
    output: ""
  },
  {
    input: ["aa", "aa"],
    output: "aa"
  },
  {
    input: ["a", ""],
    output: ""
  },
  {
    input: ["flower","flow","flight"],
    output: "fl"
  },
  {
    input: ["dog","racecar","car"],
    output: ""
  },
  {
    input: [],
    output: ""
  },
  {
    input: [""],
    output: ""
  },
];


describe.each(testExample)(
  'LongestCommonPrefix test',
  (testCase) => {
    let input = testCase.input;
    let expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input)).toBe(expected)
    })
  }
)


