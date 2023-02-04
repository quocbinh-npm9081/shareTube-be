module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '0/(.*)': '<rootDir>/src/$l',
  },
};
