# meteor-ddp-rate-limiter-mixin

This is a mixin for [mdg:validated-method](https://github.com/meteor/validated-method) to add rate limitation support to Meteor's methods.

Some examples in pseudo code:

```js
import { PermissionsMixin } from 'meteor/didericis:permissions-mixin'
import DDPRateLimiterMixin from 'meteor/liberation:ddp-rate-limiter-mixin'

// we can create instance of DDPRateLimiterMixin with default values for all methods.
const ddpRateLimiterMixin = DDPRateLimiterMixin({
  numRequests: 50,
  timeInterval: 1000
  ...
})

// or just do it with default settings
const ddpRateLimiterMixin = DDPRateLimiterMixin()

export const baseMixinsSet = [
  PermissionsMixin, ddpRateLimiterMixin
]
```

```js
import { baseMixinsSet } from './methodMixins.js'

// with default settings for DDPRateLimiterMixin
void new ValidatedMethod({
  name: 'tasks.createTask',
  mixins: baseMixinsSet,
  allow: [{
    roles: ['pm'],
    group: Roles.GLOBAL_GROUP
  }],
  validate: new SimpleSchema({ ... }).validator(),
  run ({ taskData }) {
    ...
  }
})

// or with custom settings for DDPRateLimiterMixin
void new ValidatedMethod({
  name: 'tasks.removeTask',
  mixins: baseMixinsSet,
  allow: [{
    roles: ['pm'],
    group: Roles.GLOBAL_GROUP
  }],
  rateLimit: {
    matcher: {},                      // optional parameter
    clientAddress () { return true }, // optional parameter
    connectionId () { return true },  // optional parameter
    userId () { return true },        // optional parameter
    numRequests: 50,                  // optional parameter
    timeInterval: 1000                // optional parameter
  },
  validate: new SimpleSchema({ ... }).validator(),
  run ({ taskData }) {
    ...
  }
})
```

For more info check the links:
* [ddp-rate-limiter-mixin](https://github.com/nlhuykhang/ddp-rate-limiter-mixin)
* [DDPRateLimiter](http://docs.meteor.com/api/methods.html#ddpratelimiter)
