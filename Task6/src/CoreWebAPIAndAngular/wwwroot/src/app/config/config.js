"use strict";
var api_base_url_1 = require('./shared/api-base-url');
var api_servers_enum_1 = require('app/config/shared/api-servers.enum');
var api_request_urls_1 = require('./shared/api-request-urls');
var AppConfig = (function () {
    function AppConfig() {
    }
    AppConfig.apiUrl = api_base_url_1.ApiBaseUrl.get(api_servers_enum_1.ApiServers.dev);
    AppConfig.urls = api_request_urls_1.ApiRequestUrls.urls;
    AppConfig.projectName = 'Angular2Template';
    AppConfig.defaultLanguage = 'ua';
    return AppConfig;
}());
exports.AppConfig = AppConfig;
//# sourceMappingURL=config.js.map