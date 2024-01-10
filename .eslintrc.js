module.exports = {
  env: {
     es2021: true
  },
  extends: [
     'eslint:recommended',
     'plugin:react/recommended',
     'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
     ecmaVersion: 'latest',
     sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
     'prettier/prettier': 'off',
     'object-curly-spacing': 'error',
     '@typescript-eslint/explicit-function-return-type': 'off',
     '@typescript-eslint/strict-boolean-expressions': 'off',
     '@typescript-eslint/no-floating-promises': 'off',
     '@typescript-eslint/no-unused-vars': 'error',
     'react/jsx-curly-spacing': [
        2,
        'never',
        {
           objectLiterals: 'always'
        }
     ],
     'eol-last': ['error', 'always'],
     'no-multiple-empty-lines': 'error',
     'react/jsx-indent-props': ['error', 3],
     'react/jsx-indent': ['error', 3],
     indent: ['error', 3]
  }
};
