const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),);

module.exports = {
    extends: [
        'airbnb', 'prettier', 'prettier/react'
    ],
    plugins: [
        'prettier', 'react',
    ],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'prettier/prettier': [
            'error', prettierOptions
        ],
        'arrow-body-style': [
            2, 'as-needed'
        ],
        "func-names": 2,
        "prefer-arrow-callback": 2,
        'class-methods-use-this': 0,
        'import/first': 2,
        'import/newline-after-import': 2,
        'import/no-dynamic-require': 2,
        'import/no-extraneous-dependencies': 1,
        'import/no-named-as-default': 2,
        'import/no-unresolved': [
            2, {
                ignore: ['\.img$']
            }
        ],
        'import/no-webpack-loader-syntax': 2,
        'import/prefer-default-export': 2,
        'import/no-duplicates': 2,
        indent: [
            2, 2, {
                SwitchCase: 1
            },
        ],
        'max-len': 0,
        'newline-per-chained-call': 0,
        'no-confusing-arrow': 0,
        'no-console': 1,
        'no-debugger': 1,
        'no-unused-vars': 2,
        'object-shorthand': 0,
        'no-use-before-define': 0,
        camelcase: [
            2, {
                ignoreDestructuring: true,
                properties: 'never'
            }
        ],
        'prefer-template': 2,
        'react/destructuring-assignment': 0,
        'react/jsx-closing-tag-location': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-first-prop-new-line': [
            2, 'multiline'
        ],
        'react/jsx-filename-extension': [
            0, {
                "extensions": [".js", ".jsx"]
            }
        ],
        'react/prop-types': 1,
        'react/jsx-no-target-blank': 0,
        'react/jsx-uses-vars': 2,
        'react/require-default-props': 0,
        'react/require-extension': 0,
        'react/self-closing-comp': 2,
        'react/no-access-state-in-setstate': 1,
        'react/require-render-return': 2,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/sort-comp': 1,
        'require-yield': 0,
    },
};
