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
      clientAddress,
      connectionId,
      userId,
      callback
    } = opts

    _.defaults(matcher, {
      clientAddress,
      connectionId,
      connectionId
    })

    matcher.name = methodOptions.name
    matcher.type = 'method'

    DDPRateLimiter.addRule(
      matcher, numRequests, timeInterval, callback
    )

    return methodOptions
  }
}
