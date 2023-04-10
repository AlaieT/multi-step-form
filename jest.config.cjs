/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  rootDir: "./src",
  setupFiles: ["<rootDir>/__setup__/reactFormHook.ts"],
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

    "\\.svg$": "<rootDir>/__mocks__/svg.ts",

    "^@/components/(.*)$": "<rootDir>/components/$1"
  },
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest"
  },
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: ["/node_modules/"],

  modulePathIgnorePatterns: [
    "<rootDir>/utils/*",
    "<rootDir>/app.ts",
    "<rootDir>/main.ts",
    "<rootDir>/types.ts"
  ]
};
