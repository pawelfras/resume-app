module.exports = {
  displayName: 'my-resume',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  coverageDirectory: '../../coverage/apps/my-resume',
};
