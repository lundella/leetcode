const solution = require('../83.RemoveDuplicatesFromSortedList');
// const solution = require('../83.solution');
const testExample = [
  {
    input: {},
    output: {}
  },
  {
    input: {
      val: 1,
      next: null
    },
    output: {
      val: 1,
      next: null
    }
  },
  {
    input: {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: null
        }
      }
    },
    output: {
      val: 1,
      next: {
        val: 2,
        next: null
      }
    }
  },
  {
    input: {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 3,
              next: null
            }
          }
        }
      }
    },
    output: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null
        }
      }
    }
  }
];

describe.each(testExample)(
  'Remove Duplicates From SortedList',
  (testCase) => {
    const input = testCase.input;
    const expected = testCase.output;

    test(`Test [${input}] to be ${expected}`, () => {
      expect(solution(input)).toMatchObject(expected)
    })
  }
)