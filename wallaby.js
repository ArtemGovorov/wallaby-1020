module.exports = function () {
  return {
    files: [
      'lib/**/*.js',
      'specHelper.js'
    ],

    tests: [
      'test/**/*.spec.js'
    ],

    env: {
      type: 'node'
    },

    setup: function () {
      require('./specHelper');
    }
  };
};