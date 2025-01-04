import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import { fixupConfigRules } from '@eslint/compat'


// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url) // eslint-disable-line no-underscore-dangle
const __dirname = path.dirname(__filename) // eslint-disable-line no-underscore-dangle

const compat = new FlatCompat({
  baseDirectory: __dirname,
})


export default [
  {
    ignores: [
      '.yarn/',
      '.yalc/',
      'dist/',
    ],
  },

  ...fixupConfigRules(compat.config({
    extends: [
      '@jenssimon/eslint-config-base',
    ],
    overrides: [
      {
        parserOptions: {
          project: './tsconfig.json',
        },
        extends: [
          '@jenssimon/eslint-config-typescript',
        ],
        files: ['*.ts'],
        rules: {
          '@typescript-eslint/naming-convention': 'off',
        },
      },
    ],
  })).map((rule) => ({
    files: [
      '**/*.js',
      '**/*.mjs',
      '**/*.ts',
    ],
    ...rule,
  })),
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
]
