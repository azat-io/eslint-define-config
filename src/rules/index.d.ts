import type { EslintRules } from './eslint';
import type { RuleConfig } from './rule-config';
import type { TypeScriptEslintRules } from './typescript-eslint';

/**
 * Rules.
 *
 * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
 */
export type Rules = Partial<EslintRules & TypeScriptEslintRules & Record<string, RuleConfig>>;
