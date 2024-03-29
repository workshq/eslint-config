module.exports = {
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    // Disables rules handled by Typescript
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Typescript handles module resolutions
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    // Turn off default and use @typescript's no-unused-vars.
    // Default causes false positives in ts files.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      // Ignore variables that start with underscores
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
    }],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', {
      default: 'generic',
    }],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    // Use Typescript's no-use-before-define to avoid false positives
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', {
      // Types can appear anywhere
      typedefs: false,
      ignoreTypeReferences: true,
    }],
    // Use Typescript's no-shadow to avoid false positives,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    // Typescript can handle exhaustive matches
    'default-case': 'off',
  },
};
