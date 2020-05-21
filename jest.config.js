module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/@stencil/core/testing/jest-preprocessor.js'
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(tsx?|jsx?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
    'jsx'
  ],
  reporters: [
    'jest-dot-reporter'
  ],
  coverageDirectory: './test/results/unit/coverage',
  coverageReporters: [
    'lcov',
    'text'
  ]
};
