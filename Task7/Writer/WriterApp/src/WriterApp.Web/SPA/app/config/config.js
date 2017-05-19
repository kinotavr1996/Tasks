"use strict";
var api_base_url_1 = require('./shared/api-base-url');
var api_request_urls_1 = require('./shared/api-request-urls');
var api_servers_enum_1 = require("./shared/api-servers.enum");
var AppConfig = (function () {
    function AppConfig() {
    }
    AppConfig.apiUrl = api_base_url_1.ApiBaseUrl.get(api_servers_enum_1.ApiServers.dev);
    AppConfig.urls = api_request_urls_1.ApiRequestUrls.urls;
    AppConfig.projectName = 'WriterApp';
    return AppConfig;
}());
exports.AppConfig = AppConfig;
//# sourceMappingURL=config.js.map