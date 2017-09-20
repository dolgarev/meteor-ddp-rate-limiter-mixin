Package.describe({
  name: 'liberation:ddp-rate-limiter-mixin',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.2');
  api.use(['ecmascript', 'ddp-rate-limiter', 'underscore'], 'server');
  api.mainModule('ddp-rate-limiter-mixin.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('liberation:ddp-rate-limiter-mixin');
  api.mainModule('ddp-rate-limiter-mixin-tests.js');
});
