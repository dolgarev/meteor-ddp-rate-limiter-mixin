import { DDPRateLimiter } from 'meteor/ddp-rate-limiter'
import { _ } from 'meteor/underscore'

export default function (defaultOptions = {}) {
  _.defaults(defaultOptions, {
    matcher: {},
    clientAddress () { return true },
    connectionId () { return true },
    userId () { return true },
    numRequests: 10,
    timeInterval: 1000
  })

  return function (methodOptions) {
    const opts = {}
    _.extend(opts, _.defaults(
      methodOptions.rateLimit || {}, defaultOptions
    ))

    const {
      matcher,
      numRequests,
      timeInterval,
      callback
    } = opts

    _.defaults(matcher, {
      clientAddress: opts.clientAddress,
      connectionId: opts.connectionId,
      userId: opts.userId
    })

    DDPRateLimiter.addRule({
      type: 'method',
      name: methodOptions.name,
      userId: matcher.userId,
      connectionId: matcher.connectionId,
      clientAddress: matcher.clientAddress
    }, numRequests, timeInterval, callback)

    return methodOptions
  }
}
