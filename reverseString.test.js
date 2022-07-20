
const reverseString = require("./reverseString");

test('return reversed string', () => {
  expect(reverseString('hi')).toBe('ih')
})

test('return reversed string', () => {
  expect(reverseString('hola')).toBe('aloh')
})