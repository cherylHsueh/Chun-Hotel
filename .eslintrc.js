module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
      "max": 1,
      "allowFirstLine": false
      }
  }],
  "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "never"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}
