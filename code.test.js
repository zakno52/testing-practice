import { capitalize } from './code';

test('capitalize string', () => {
  expect(capitalize('test')).toBe('Test');
});
