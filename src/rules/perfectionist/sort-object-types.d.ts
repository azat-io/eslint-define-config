import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortObjectTypesOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
}

/**
 * Options.
 */
export type SortObjectTypesOptions = [SortObjectTypesOption?];

/**
 * Enforce sorted object types.
 *
 * @see [sort-object-types](https://eslint-plugin-perfectionist.azat.io/rules/sort-object-types)
 */
export type SortObjectTypesRuleConfig = RuleConfig<SortObjectTypesOptions>;

/**
 * Enforce sorted object types.
 *
 * @see [sort-object-types](https://eslint-plugin-perfectionist.azat.io/rules/sort-object-types)
 */
export interface SortObjectTypesRule {
  /**
   * Enforce sorted object types.
   *
   * @see [sort-object-types](https://eslint-plugin-perfectionist.azat.io/rules/sort-object-types)
   */
  'perfectionist/sort-object-types': SortObjectTypesRuleConfig;
}
