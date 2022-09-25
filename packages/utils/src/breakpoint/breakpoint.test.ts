import {
  BreakpointsConfig,
  BreakpointsRules,
  createBreakpoints,
  DEFAULT_CONFIG
} from './breakpoint';

const MOCK_HEIGHT = 1000;

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

      expect(createBreakpoints(CUSTOM_CONFIG).rules).toStrictEqual(CUSTOM_CONFIG);
    });
  });

  describe('between', () => {
    test('returns true if width is between min and max', () => {
      window.resizeTo(400, MOCK_HEIGHT);
      const breakpoints: BreakpointsConfig = createBreakpoints();

      expect(breakpoints.between('xs', 'sm')).toBeTruthy();
    });

    test('returns false if width is not between min and max', () => {
      window.resizeTo(1800, MOCK_HEIGHT);
      const breakpoints: BreakpointsConfig = createBreakpoints();

      expect(breakpoints.between('xs', 'sm')).toBeFalsy();
    });
  });

  describe('isBreakpointUp', () => {
    test('returns true if width is greater than min', () => {
      window.resizeTo(900, MOCK_HEIGHT);
      const breakpoints: BreakpointsConfig = createBreakpoints();

      expect(breakpoints.up('sm')).toBeTruthy();
    });

    test('returns false if width is not greater than min', () => {
      window.resizeTo(100, MOCK_HEIGHT);
      const breakpoints: BreakpointsConfig = createBreakpoints();

      expect(breakpoints.up('sm')).toBeFalsy();
    });
  });
});
