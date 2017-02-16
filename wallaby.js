module.exports = function () {
  return {
    files: [
      'lib/**/*.js',
      'test/specHelper.js'
    ],

    tests: [
      'test/**/*.spec.js'
    ],

    env: {
      type: 'node'
    },

    setup: function (wallaby) {
      const path = require('path')
      require('./test/specHelper');
    }
  };
};
