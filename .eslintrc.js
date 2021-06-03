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
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        map: [['@', '.']],
      },
    },
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: ['components/**/*.{jsx,js,ts,tsx}'],
      rules: { 'import/no-cycle': 'warn' },
    },
    {
      files: ['*.js'],
      rules: { '@typescript-eslint/no-var-requires': 'off' },
    },
    {
      files: ['*.tsx'],
      rules: { 'react/prop-types': 'off' },
    },
    {
      files: ['utilities/**/*.{jsx,js,ts,tsx}', 'firebase/**/*.{jsx,js,ts,tsx}'],
      rules: { 'import/prefer-default-export': 'off' },
    },
  ],
  rules: {
    // React
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    // TypeScript
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    // Other
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'no-use-before-define': 'off',
    'no-shadow': 'off',
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
  globals: {
    JSX: 'readonly',
  },
};
