var webpackConfig = require('../../build/webpack.test.conf');

// remove entry because karma doesn't need it.
delete webpackConfig.entry
// use inline sourcemap for karma-sourcemap-loader
webpackConfig.module.devtool: 'inline-source-map'


module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'], // https://github.com/karma-runner/karma-jasmine
    reporters: ['spec'],
    files: ['./index.js'],
    preprocessors: {
      // https://www.npmjs.com/package/karma-webpack
      // https://www.npmjs.com/package/karma-sourcemap-loader
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
  })
}
