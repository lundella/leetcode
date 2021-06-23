const solution = require('../118.PaskalsTriangle');
const testExample = [
  {
    input: 5,
    output: [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ],
  },
  {
    input: 1,
    output: [ [ 1 ] ],
  },
];


describe.each(testExample)(
  'Paskal`s Traiangle',
  (testCase) => {
    const input = testCase.input;
    const expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input)).toEqual(expected)
    })
  }
)