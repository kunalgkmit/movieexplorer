import { validateAge } from '@utils/helpers';

describe('AGE VALIDATION TESTS>>', () => {
  test('Validate Empty Age', () => {
    expect(validateAge('')).toBe('Enter Age');
  });

  test('Validate NaN Age', () => {
    expect(validateAge('name')).toBe('Enter Valid Age');
  });

  test('Validate Not >18 Age', () => {
    expect(validateAge('1')).toBe('Age must be >18');
  });

  test('Validate A Valid Age', () => {
    expect(validateAge('19')).toBe('');
  });
});
