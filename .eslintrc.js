module.exports = {
  env: {
    es6: false,
    jasmine: true
  },
  extends: [
    'google',
    'angular',
    'plugin:jasmine/recommended'
  ],
  plugins: [
    'jasmine'
  ],
  rules: {
    'jasmine/no-spec-dupes': [
      1,
      'branch'
    ],
    'jasmine/no-suite-dupes': [
      1,
      'branch'
    ],
    'max-len': [
      2,
      120
    ],
    'no-var': [
      0
    ]
  }
};
