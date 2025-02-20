import path from 'node:path'
import { fileURLToPath } from 'node:url'

import tseslint from 'typescript-eslint'

import { FlatCompat } from '@eslint/eslintrc'
import { fixupConfigRules } from '@eslint/compat'


// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url) // eslint-disable-line no-underscore-dangle
const __dirname = path.dirname(__filename) // eslint-disable-line no-underscore-dangle

const compat = new FlatCompat({
  baseDirectory: __dirname,
})


export default tseslint.config(
  {
    ignores: [
      '.yarn/',
      '.yalc/',
      'dist/',
    ],
  },

  fixupConfigRules(compat.config({
    extends: [
      '@jenssimon/eslint-config-base',
    ],
  })),

  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            '*.mjs',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
)
