const loggingApiKey = process.env.LOGGING_API_KEY
const loggingSource = process.env.LOGGING_TEST_SOURCE

const ipInfoMaxAge = "86400"
const ipInfoToken = process.env.IPINFO_API_TOKEN

const headers = [
  "rMeth",
  "rUrl",
  "uAgent",
  "cfRay",
  "cIP",
  "statusCode",
  "contentLength",
  "cfCacheStatus",
  "contentType",
  "responseConnection",
  "requestConnection",
  "cacheControl",
  "acceptRanges",
  "expectCt",
  "expires",
  "lastModified",
  "vary",
  "server",
  "etag",
  "date",
  "transferEncoding",
]

const INSTALL_OPTIONS = {
  env: "test",
  source: loggingSource,
  logging: {
    api_key: loggingApiKey,
  },
  metadata: headers.map(value => ({ field: value })),
  ipInfoApiKey: ipInfoToken,
}

module.exports = INSTALL_OPTIONS
