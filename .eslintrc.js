module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  env: {
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  rules: {
    // React
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    // TypeScript
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    // Unicorn
    'unicorn/filename-case': ['off'],
    'unicorn/prefer-negative-index': ['off'],
    'unicorn/prevent-abbreviations': ['off'],
    'unicorn/no-null': ['off'],
    'unicorn/no-useless-undefined': ['off'],
    // Other
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'no-extra-parens': 'warn',
    'prefer-arrow-callback': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
  },
};
