import { capitalize, reverseString } from './code';

describe('capitalize function', () => {
  test('capitalizes the first letter of a lowercase string', () => {
    expect(capitalize('test')).toBe('Test');
  });
  test('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('reverseString function', () => {
  test('reverses a simple string', () => {
    expect(reverseString('test')).toBe('tset');
  });
  test('handles empty string', () => {
    expect(reverseString('')).toBe('');
  });
});
