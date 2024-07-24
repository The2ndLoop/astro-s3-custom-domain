import eslintPluginAstro from 'eslint-plugin-astro'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    parser: '@typescript-es-lint/recommended',
    rules: { semi: ['off', 'always'] },
  },
]
