// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

export default withNuxt([
  {
    plugins: {
      vue,
    },
    rules: {
      ...prettier.rules,
      // General rules
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-unused-vars': ['warn'],
      'no-console': 'warn',
      'comma-dangle': ['error', 'always-multiline'],
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      indent: ['error', 2],
      'max-len': ['warn', { code: 500 }],

      // Vue rules
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'never',
            normal: 'never',
            component: 'never',
          },
        },
      ],
      'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-prop-types': 'off',
      'vue/no-mutating-props': 'error',
      'vue/no-unused-components': 'warn',
    },
  },
  {
    files: ['app.vue'],
    rules: {
      semi: 'off',
      'vue/html-self-closing': 'off',
    },
  },
  {
    files: ['components/WeatherCard.vue'],
    rules: {
      'vue/html-self-closing': 'off',
    },
  },
  {
    files: ['nuxt.config.ts'],
    rules: {
      'comma-dangle': 'off',
    },
  },
])
