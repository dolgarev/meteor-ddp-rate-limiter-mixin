/* global Package */

Package.describe({
  name: 'liberation:ddp-rate-limiter-mixin',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'This is a mixin for mdg:validated-method to add rate limitation support to Meteor\'s methods.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dolgarev/meteor-ddp-rate-limiter-mixin',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.5.2')
  api.use(['ecmascript', 'ddp-rate-limiter', 'underscore'], 'server')
  api.mainModule('ddp-rate-limiter-mixin.js', 'server')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use(['tinytest', 'ddp-rate-limiter', 'underscore'], 'server')
  api.use('liberation:ddp-rate-limiter-mixin', 'server')
  api.mainModule('ddp-rate-limiter-mixin-tests.js')
})
