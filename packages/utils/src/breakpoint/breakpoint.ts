export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointRule = 'width' | 'name';
export type BreakpointRuleValue = Breakpoint | number;

export type BreakpointRules = Record<BreakpointRule, BreakpointRuleValue>;

export type BreakpointsRules = {
  [key in Breakpoint]?: BreakpointRules;
};

export const DEFAULT_CONFIG: BreakpointsRules = {
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

export class BreakpointsConfig {
  rules: BreakpointsRules = {};
  windowWidth = 0;

  constructor() {
    this.rules = DEFAULT_CONFIG;
  }

  private _getRuleValue(key: Breakpoint, rule: BreakpointRule) {
    return (this.rules[key] as BreakpointRules)[rule];
  }

  createBreakpoints(rules?: BreakpointsRules): BreakpointsConfig {
    this.rules = rules || DEFAULT_CONFIG;
    this.windowWidth = window.innerWidth;
    return this;
  }

  between(min: Breakpoint, max: Breakpoint): boolean {
    return (
      this.windowWidth >= this._getRuleValue(min, 'width') &&
      this.windowWidth <= this._getRuleValue(max, 'width')
    );
  }

  up(min: Breakpoint): boolean {
    return this.windowWidth >= this._getRuleValue(min, 'width');
  }
}

const breakpointConfig = new BreakpointsConfig();
export const { createBreakpoints } = {
  createBreakpoints: (rules?: BreakpointsRules) => breakpointConfig.createBreakpoints(rules)
};
