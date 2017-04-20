import { ApiBaseUrl } from './shared/api-base-url';
import { ApiServers } from 'app/config/shared/api-servers.enum';
import { ApiRequestUrls } from './shared/api-request-urls';

export class AppConfig {
    static apiUrl = ApiBaseUrl.get(ApiServers.dev);
    static urls = ApiRequestUrls.urls;
    static projectName = 'Angular2Template';
    static defaultLanguage = 'ua';
}
