"use strict";
var api_servers_enum_1 = require("./api-servers.enum");
var ApiBaseUrl = (function () {
    function ApiBaseUrl() {
    }
    ApiBaseUrl.get = function (env) {
        switch (env) {
            case api_servers_enum_1.ApiServers.dev: {
                return '/api/';
            }
        }
    };
    return ApiBaseUrl;
}());
exports.ApiBaseUrl = ApiBaseUrl;
//# sourceMappingURL=api-base-url.js.map