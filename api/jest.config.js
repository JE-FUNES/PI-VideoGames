module.exports = {
    transform: {},
    transformIgnorePatterns: ["/node_modules/"],
    testMatch: ["**/__tests__/**/*.test.js"],
    setupFilesAfterEnv: ["@babel/register"],
    verbose: true,
  };
  