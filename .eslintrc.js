module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    'jest/globals': true,
  },
  globals: {
    context: true,
    document: 'readonly',
    EventSource: 'readonly',
    expect: true,
    FormData: 'readonly',
    google: true,
    jsdom: true,
    JSX: true,
    mount: true,
    mountWithRouter: true,
    React: true,
    shallow: true,
    shallowWithRouter: true,
    window: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    files: ['*.tsx'],
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
      { property: 'forbidExtraProps', exact: true },
    ],
    componentWrapperFunctions: [
      'observer',
      { property: 'styled' },
      { property: 'observer', object: 'Mobx' },
      { property: 'observer', object: '<pragma>' },
    ],
    formComponents: ['CustomForm', { name: 'Form', formAttribute: 'endpoint' }],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
    jest: {
      version: require('jest/package.json').version,
    },
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/all',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/all',
    'plugin:jest-react/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:markdown/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'jest',
    'jest-react',
    'import',
    'import-helpers',
    'prettier',
    'promise',
    'markdown',
  ],
  rules: {
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-extraneous-class': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-unused-vars': [2, { varsIgnorePattern: 'React' }],
    '@typescript-eslint/no-use-before-define': 2,
    curly: 2,
    'implicit-arrow-linebreak': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'import-helpers/order-imports': [
      2,
      {
        newlinesBetween: 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
          ignoreCase: true,
        },
        groups: ['/^react/', 'module', ['parent', 'sibling', 'index']],
      },
    ],
    'import/no-cycle': 0,
    'jest/no-conditional-expect': 0,
    'jest/no-hooks': 0,
    'jest/require-hook': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'no-alert': 2,
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-debugger': 2,
    'no-inline-comments': 2,
    'no-param-reassign': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'ForOfStatement',
      'DoWhileStatement',
      'WithStatement',
      'TSEnumDeclaration',
    ],
    'no-undef': 2,
    'operator-linebreak': 0,
    'prefer-template': 2,
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    radix: 2,
    'react/destructuring-assignment': 2,
    'react/forbid-component-props': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-child-element-spacing': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-max-depth': [2, { max: 4 }],
    'react/jsx-newline': 0,
    'react/jsx-no-bind': [
      2,
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    'react/jsx-no-literals': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/self-closing-comp': [
      2,
      {
        component: true,
        html: true,
      },
    ],
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
    'testing-library/await-async-query': 0,
    'testing-library/no-await-sync-query': 0,
  },
};
