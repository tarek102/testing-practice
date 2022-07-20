const capitalize = require('./capitalize');


describe('return capitalized first letter', () => {
  test('Hello from hello', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('Ok from ok', () => {
    expect(capitalize('ok')).toBe('Ok');
  });

  test('Woo from woo', () => {
    expect(capitalize('woo')).toBe('Woo');
  });
})

