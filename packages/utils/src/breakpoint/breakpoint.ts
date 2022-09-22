import { mapValuesBy } from '../collection';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointValues = { [key in Breakpoint]: number };

export interface BreakpointRules {
  name: Breakpoint;
  width: number;
}

export type BreakpointRule = keyof BreakpointRules;

export type BreakpointRuleValue = BreakpointRules[keyof BreakpointRules];

export type BreakpointsRules = {
  [key in Breakpoint]?: BreakpointRules;
};

export const BREAKPOINTS: BreakpointsRules = {
  xs: {
    name: 'xs',
    width: 0
  },
  sm: {
    name: 'sm',
    width: 600
  },
  md: {
    name: 'md',
    width: 900
  },
  lg: {
    name: 'lg',
    width: 1200
  },
  xl: {
    name: 'xl',
    width: 1536
  }
};

const getBreakpointConfig = (key: Breakpoint, breakpointRules: BreakpointsRules = BREAKPOINTS) =>
  breakpointRules[key] as BreakpointRules;

export const getBreakpointRuleBy = (
  key: BreakpointRule,
  breakpointRules: BreakpointsRules = BREAKPOINTS
): BreakpointRules | Record<Breakpoint, BreakpointRuleValue> =>
  mapValuesBy<BreakpointsRules, BreakpointRules>(breakpointRules, (value) =>
    key ? (value as BreakpointRules)[key] : value
  );

export const isBreakpointBetween = (width: number, min: Breakpoint, max: Breakpoint): boolean => {
  return width >= getBreakpointConfig(min).width && width <= getBreakpointConfig(max).width;
};

export const isBreakpointUp = (width: number, min: Breakpoint): boolean => {
  return width >= getBreakpointConfig(min).width;
};
