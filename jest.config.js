module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^api-client/(.*)$": "<rootDir>/src/services/mocks/$1"
  },
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js', // No need to cover bootstrap file
    '!src/registerServiceWorker.js', // No need to cover 
    '!src/router.js' // No need to cover 
  ],
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testURL: "http://localhost/"
};
