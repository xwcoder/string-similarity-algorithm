module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: [`${__dirname}/src/**/*.(test|spec).ts`],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.{test, spec}.{ts, tsx}'
  ]
}
