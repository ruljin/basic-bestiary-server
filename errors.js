exports.OK = { code: 200, message: "OK" };
exports.CREATED = { code: 201, message: "Created" };
exports.ACCEPTED = { code: 202, message: "Accepted" };
exports.NO_CONTENT = { code: 204, message: "No Content" };
exports.TEMPORARY_REDIRECT = { code: 307, message: "Temporary Redirect" };
exports.BAD_REQUEST = { code: 400, message: "Bad Request" };
exports.UNAUTHORIZED = { code: 401, message: "Unauthorized" };
exports.FORBIDDEN = { code: 403, message: "Forbidden" };
exports.NOT_FOUND = { code: 404, message: "Not Found" };
exports.METHOD_NOT_ALLOWED = { code: 405, message: "Method Not Allowed" };
exports.REQUEST_TIME_OUT = { code: 408, message: "Request Time-out" };
exports.UNSUPPORTED_MEDIA_TYPE = {
  code: 415,
  message: "Unsupported Media Type",
};
exports.TOO_MANY_REQUESTS = { code: 429, message: "Too Many Requests" };
exports.INTERNAL_SERVER_ERROR = { code: 500, message: "Internal Server Error" };
exports.NOT_IMPLEMENTED = { code: 501, message: "Not Implemented" };
exports.BAD_GATEWAY = { code: 502, message: "Bad Gateway" };
exports.SERVICE_UNAVAILABLE = { code: 503, message: "Service Unavailable" };
exports.GATEWAY_TIME_OUT = { code: 504, message: "Gateway Time-out" };
exports.NETWORK_AUTHENTICATION_REQUIRED = {
  code: 511,
  message: "Network Authentication Required",
};
