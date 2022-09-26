import {
  BreakpointsHelper,
  BreakpointsRules,
  createBreakpoints,
  DEFAULT_CONFIG
} from './breakpoint';

describe('Breakpoint helper methods', () => {
  describe('createBreakpoints', () => {
    test('returns breakpoint breakpoints created', () => {
      expect(createBreakpoints().rules).toStrictEqual(DEFAULT_CONFIG);
    });

    test('returns custom breakpoint breakpoints created', () => {
      const CUSTOM_CONFIG: BreakpointsRules = {
        xs: {
          name: 'xs',
          width: 0
        },
        sm: {
          name: 'md',
          width: 400
        }
      };

      expect(createBreakpoints({ rules: CUSTOM_CONFIG }).rules).toStrictEqual(CUSTOM_CONFIG);
    });
  });

  describe('between', () => {
    test('returns true if width is between min and max', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 400 });

      expect(breakpoints.between('xs', 'sm')).toBeTruthy();
    });

    test('returns false if width is not between min and max', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 1800 });

      expect(breakpoints.between('xs', 'sm')).toBeFalsy();
    });
  });

  describe('isBreakpointUp', () => {
    test('returns true if width is greater than min', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 900 });

      expect(breakpoints.up('sm')).toBeTruthy();
    });

    test('returns false if width is not greater than min', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 100 });

      expect(breakpoints.up('sm')).toBeFalsy();
    });
  });
});
