const solution = require('../21.MergeTwoSortedLists');
const testExample = [
  {
    input: [
        {val:1, next:{ val:2, next:{val:4, next: null}}}, 
        {val:1, next:{ val:3, next:{val:4, next: null}}}
    ],
    output: {val:1, next:{ val:1, next:{val:2, next: {val:3, next: {val:4, next: {val:4, next: {}}}}}}}
  },
  {
    input: [
      {val:1, next:{ val:1, next:{ val:1, next: null}}}, 
      {val:2, next:{ val:2, next:{ val:3, next: { val:4, next: null}}}}
    ],
    output: { val:1, next:{ val:1, next:{ val:1, next: { val:2, next: { val:2, next: { val:3, next: { val:4, next: {}}}}}}}}
  },
  {
    input: [
      {val:3, next: { val:7, next:{ val:8, next: null}}}, 
      {val:1, next: { val:2, next:{ val:3, next: { val:4, next: null}}}}
    ],
    output: { val:1, next:{ val:2, next:{ val:3, next: { val:3, next: { val:4, next: { val:7, next: { val:8, next: {}}}}}}}}
  },
  {
    input: [
      {val:3, next: null}, 
      {val:1, next: { val:2, next:{val:3, next: {val:4, next: null}}}}
    ],
    output: { val:1, next:{ val:2, next:{ val:3, next: { val:3, next: { val:4, next: {}}}}}}
  }
];

describe.each(testExample)(
  'MergeTwoSortedLists test',
  (testCase) => {
    let input1 = testCase.input[0];
    let input2 = testCase.input[1];
    let expected = testCase.output;

    test(`Test [${input1, input2}] to be ${expected}`, () => {
      expect(solution(input1, input2 )).toMatchObject(expected);
    })
  }
)