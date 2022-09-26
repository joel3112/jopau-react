import { getPropValue } from '../object';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointRule = 'width' | 'name';
export type BreakpointRuleValue = Breakpoint | number;

export type BreakpointRules = Record<BreakpointRule, BreakpointRuleValue>;

export type BreakpointsRules = {
  [key in Breakpoint]?: BreakpointRules;
};

export interface BreakpointsConfig {
  rules?: BreakpointsRules;
  targetWidth?: number;
}

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

export class BreakpointsHelper {
  key: Breakpoint | null = null;
  rules: BreakpointsRules = {};
  #targetWidth = 0;

  get #matches(): { [key in Breakpoint]: boolean } {
    return {
      xs: this.between('xs', 'sm'),
      sm: this.between('sm', 'md'),
      md: this.between('md', 'lg'),
      lg: this.between('lg', 'xl'),
      xl: this.up('xl')
    };
  }

  createBreakpoints(config: BreakpointsConfig): BreakpointsHelper {
    this.rules = getPropValue(config, 'rules', DEFAULT_CONFIG);
    this.#targetWidth = getPropValue(config, 'targetWidth', window.innerWidth);

    this.key = this.#targetWidth
      ? (Object.keys(this.#matches).filter(
          (key) => this.#matches[key as Breakpoint]
        )[0] as Breakpoint)
      : null;
    return this;
  }

  between(min: Breakpoint, max: Breakpoint): boolean {
    return (
      this.#targetWidth >= this.#getRuleValue<number>(min, 'width') &&
      this.#targetWidth <= this.#getRuleValue<number>(max, 'width')
    );
  }

  up(min: Breakpoint): boolean {
    return this.#targetWidth >= this.#getRuleValue<number>(min, 'width');
  }

  #getRuleValue<T>(key: Breakpoint, rule: BreakpointRule): T {
    return getPropValue(this.rules, `${key}.${rule}`, null as T);
  }
}

const breakpointHelper = new BreakpointsHelper();
export const { createBreakpoints } = {
  createBreakpoints: (config?: BreakpointsConfig) =>
    breakpointHelper.createBreakpoints(config || {})
};
