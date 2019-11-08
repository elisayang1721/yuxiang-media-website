const path = require('path')

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    jquery: true,
    browser: true
  },
  globals: {
    '_': true,
    'burl': true,
    'furl': true,
    'grecaptcha': true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': path.resolve('./src'),
              '@img': path.resolve('./src/assets'),
              '@as': path.resolve('./src/assets'),
              '@c': path.resolve('./src/components'),              
              '@v': path.resolve('./src/views'),
              '@css': path.resolve('./src/assets/css'),
              '@data': path.resolve('./src/assets/data'),
              '@svg': path.resolve('./src/assets/svg'),
              '@mix': path.resolve('./src/assets/mixins'),
              '@js': path.resolve('./src/assets/js'),
              '@api': path.resolve('./src/api'),
            },
            extensions: ['.js', '.vue']
          }
        }
      }
    },
    'import/extensions': ['.js', '.vue']
  },
  plugins: [
    'vue'
  ],
  rules: {
    'indent': 'error',
    'no-console': 'warn',
    'semi': 'off',
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'prefer-template': 'off',
    'prefer-destructuring': 'off',
    'import/first': 'off',
    'linebreak-style': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-multi-spaces': 'off',
    'no-useless-escape': 'off',
    'quote-props': 'off',
    'max-len': 'warn',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': ['error', {
      allowAfterThis: true
    }],
    'no-plusplus': 'off',
    'no-shadow': ['error', {
      allow: ['state']
    }],
    'no-prototype-builtins': 'off',
    'arrow-body-style': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'no-case-declarations': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
      svg: 'nerver'
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',    // for vuex state
        'e',        // for e.returnvalue
        'request',
        'config',   // for request config settings
        'Vue',      // for vue plugins define
        'editor',   // for froala
        'vm'        // for vue component 
      ]
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': [2, 'never', {
      'vue': 'never'
    }],
    'semi': ['error', 'never'],
    'func-names': ["error", "never"]
  }
}
