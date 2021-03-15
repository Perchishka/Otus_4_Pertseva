module.exports = {
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],
    reporters: ['default'],
    moduleFileExtensions: ['js', 'json'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/test/*.test.*'],
    globals: {
        testTimeout: 50000,
    },
    verbose: true,
};
