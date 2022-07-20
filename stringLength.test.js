const stringLength = require('./stringLength');

test('return string character count', () => {
  expect(stringLength('HelloTest')).toBe(9)
})

test('return string character count', () => {
  expect(stringLength('Hello')).toBe(5)
})