
module.exports = {
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "flowtype"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true,
    "node": true
  },
  "globals": {
    //
    // This is deprecated global value in node which we use a bit in the ui
    // code and occasionally causes confusion:
    // https://nodejs.org/api/deprecations.html#deprecations_dep0016_global_root
    // Nodes other globals are listed here and don't look as though they
    // cause similar confusion: https://nodejs.org/api/globals.html
    //
    "root": false,
    //
    // These flow global types aren't defined in the plugin yet.
    // https://github.com/gajus/eslint-plugin-flowtype/issues/261
    //
    "SyntheticEvent": true,
    "SyntheticAnimationEvent": true,
    "SyntheticClipboardEvent": true,
    "SyntheticCompositionEvent": true,
    "SyntheticInputEvent": true,
    "SyntheticUIEvent": true,
    "SyntheticFocusEvent": true,
    "SyntheticKeyboardEvent": true,
    "SyntheticMouseEvent": true,
    "SyntheticDragEvent": true,
    "SyntheticWheelEvent": true,
    "SyntheticTouchEvent": true,
    "SyntheticTransitionEvent": true
  },
  "rules": {
    "arrow-parens": 0,
    "sort-keys": [
      "error",
      "asc",
      {
        "caseSensitive": false,
        "natural": true
      }
    ],
    "class-methods-use-this": 0,
    "comma-dangle": 0,
    "func-names": 0,
    "function-paren-newline": 0,
    "global-require": 0,
    "no-confusing-arrow": 0,
    "no-debugger": 1,
    "no-param-reassign": 0,
    "no-restricted-properties": 0,
    "object-curly-newline": 0,
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "prefer-promise-reject-errors": 0,

    // import
    "import/default": "error",
    "import/export": "error",
    "import/named": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true,
        "optionalDependencies": true,
        "peerDependencies": true
      }
    ],
    "import/no-named-as-default": 0,
    "import/no-unresolved": "error",
    "import/no-webpack-loader-syntax": 0,
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "always"
      }
    ],
    "import/prefer-default-export": 0,

    // react
    "react/forbid-prop-types": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-filename-extension": [
      2,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/jsx-indent": 0,
    "react/jsx-no-target-blank": 0,
    "react/no-unused-prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/sort-comp": 0,
    // FIXME: uncomment:
    // This is in master of eslint-plugin-react but not released yet.
    // "react/jsx-fragments": [1, "syntax"],

    // jsx-a11y
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/iframe-has-title": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/no-static-element-interactions": 0
  }
}
