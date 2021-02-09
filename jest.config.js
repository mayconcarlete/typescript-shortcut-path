module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "@sub-folder3/(.*)":"<rootDir>/src/folder1/sub-folder2/sub-folder3/$1"
  }
};