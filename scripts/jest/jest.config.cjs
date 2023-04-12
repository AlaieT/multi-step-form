/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  collectCoverage: true,
  rootDir: "../../",
  setupFilesAfterEnv: ["<rootDir>/scripts/jest/jest-setup.ts"],
  coverageProvider: "v8",
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/*.config.js",
    "!<rootDir>/coverage/**"
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    "\\.svg$": "<rootDir>/src/__mocks__/svg.ts",

    "^@/components/(.*)$": "<rootDir>/src/components/$1"
  },
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest"
  },
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: ["/node_modules/"],

  modulePathIgnorePatterns: [
    "<rootDir>/src/utils/*",
    "<rootDir>/src/app.ts",
    "<rootDir>/src/main.ts",
    "<rootDir>/src/types.ts",
    "<rootDir>/scripts/vite/vite.config.ts"
  ]
};
