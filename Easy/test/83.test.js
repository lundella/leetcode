const solution = require('../83.RemoveDuplicatesFromSortedList');
const testExample = [
  {
    input: {},
    output: {}
  },
  {
    input: {
      value: 1,
      next: null
    },
    output: {
      value: 1,
      next: null
    }
  },
  {
    input: {
      value: 1,
      next: {
        value: 1,
        next: {
          value: 2,
          next: null
        }
      }
    },
    output: {
      value: 1,
      next: {
        value: 2,
        next: null
      }
    }
  },
  {
    input: {
      value: 1,
      next: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 3,
              next: null
            }
          }
        }
      }
    },
    output: {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null
        }
      }
    }
  }
];

describe.each(testExample)(
  'Climbing Stairs',
  (testCase) => {
    const input = testCase.input;
    const expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input)).toMatchObject(expected)
    })
  }
)