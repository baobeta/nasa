module.exports = {
  verbose: true,
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./tests/utils/setup'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/scripts/**',
    '!**/migrations/**',
    '!**/templates/**',
    '!**/tests/**',
    '!./config.js',
    '!./jest.config.js',
    '!./migration_storage.js',
  ],
  coverageDirectory: './.coverage',
};