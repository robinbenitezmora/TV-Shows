const comments = [
  {
    name: 'hi',
    date: '2022-07-12',
    comment: 'hello',
  },
  {
    name: 'hi',
    date: '2022-07-12',
    comment: 'hello',
  },
  {
    name: 'hi',
    date: '2022-07-12',
    comment: 'hello',
  },
];
let amountComments = 0;
test('Checking amount of comments into the popup', () => {
  amountComments = comments.length;
  expect(amountComments).toBe(3);
});