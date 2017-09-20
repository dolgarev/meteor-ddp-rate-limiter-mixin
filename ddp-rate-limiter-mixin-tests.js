// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by ddp-rate-limiter-mixin.js.
import { name as packageName } from "meteor/liberation:ddp-rate-limiter-mixin";

// Write your tests here!
// Here is an example.
Tinytest.add('ddp-rate-limiter-mixin - example', function (test) {
  test.equal(packageName, "ddp-rate-limiter-mixin");
});
