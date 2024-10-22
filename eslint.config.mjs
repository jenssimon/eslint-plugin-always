import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'


// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url) // eslint-disable-line no-underscore-dangle
const __dirname = path.dirname(__filename) // eslint-disable-line no-underscore-dangle

const compat = new FlatCompat({
  baseDirectory: __dirname,
})


export default [
  ...compat.config({
    extends: [
      '@jenssimon/eslint-config-base',
    ],
    overrides: [
      {
        files: [
          'commitlint.config.js',
        ],
        rules: {
          'unicorn/prefer-module': 'off',
        },
      },
    ],
  }),
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
  {
    ignores: [
      '.yarn/',
      'dist/',
    ],
  },
]
