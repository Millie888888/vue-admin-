module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-tabs': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/valid-template-root': 0,
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'key-spacing': 0,
    'space-before-blocks': 0,
    'no-multiple-empty-lines': 0,
    'object-curly-spacing': 0

  }
}
