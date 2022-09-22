import {
  Breakpoint,
  BreakpointRuleValue,
  getBreakpointRuleBy,
  isBreakpointBetween,
  isBreakpointUp
} from './breakpoint';

describe('Breakpoint helper methods', () => {
  describe('getBreakpointRuleBy', () => {
    test('returns width in empty collection', () => {
      const expected: Record<Breakpoint, BreakpointRuleValue> = {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      };

      expect(getBreakpointRuleBy('width')).toStrictEqual(expected);
    });
  });

  describe('isBreakpointBetween', () => {
    test('returns true if width is between min and max', () => {
      expect(isBreakpointBetween(400, 'xs', 'sm')).toBeTruthy();
    });
    test('returns false if width is not between min and max', () => {
      expect(isBreakpointBetween(1800, 'xs', 'sm')).toBeFalsy();
    });
  });

  describe('isBreakpointUp', () => {
    test('returns true if width is greater than min', () => {
      expect(isBreakpointUp(900, 'sm')).toBeTruthy();
    });
    test('returns false if width is not greater than min', () => {
      expect(isBreakpointUp(100, 'sm')).toBeFalsy();
    });
  });
});
