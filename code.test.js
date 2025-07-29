import { capitalize, reverseString, calculator, caesarCipher } from './code';

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

describe('calculator function', () => {
  test('sum function - add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('subtract function - sub two numbers', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });
  test('divide function - sub two numbers', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });
  test('multiply function - sub two numbers', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });
});

describe('caesarCipher function', () => {
  test('simple encryption lowercase', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });
});
