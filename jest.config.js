module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
  // preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testMatch: ["**/components/**/*.test.(js|jsx|ts|tsx)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.js?$": "<rootDir>/node_modules/babel-jest"
  }
};
