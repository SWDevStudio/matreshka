module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@vue/standard',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      extends: [
        'plugin:vue/essential'
      ],
    },
    {
      files: ['*.ts'],
      parser: "@typescript-eslint/parser",
      extends: [
        '@vue/standard',
        '@vue/typescript/recommended',
        'plugin:@typescript-eslint/recommended'
      ],
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
