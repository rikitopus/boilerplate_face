import pluginJs from '@eslint/js'
import pluginCypress from 'eslint-plugin-cypress/flat'
import pluginImport from 'eslint-plugin-import'
import pluginEslintPrettier from 'eslint-plugin-prettier/recommended'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

const pluginsConfig = {
  plugins: {
    'simple-import-sort': pluginSimpleImportSort,
    'import': pluginImport
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/no-duplicates': 'error',
    'vue/padding-line-between-blocks': ['error'],
    'vue/html-self-closing': ['error', { html: { component: 'always', void: 'always' } }],
    'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
    'cypress/unsafe-to-chain-command': 'error'
  }
}

export default [
  {
    languageOptions: {
      env: {
        node: true
      },
      globals: {
        route: 'readonly',
        axios: 'readonly',
        bootstrap: 'readonly',
        process: 'readonly',
        ...globals.browser
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    }
  },
  { ignores: ['vendor', 'public'] },
  { files: ['**/*.{js,mjs,cjs,vue}'] },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  pluginEslintPrettier,
  pluginsConfig,
  pluginCypress.configs.recommended
]
