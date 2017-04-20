import { ApiServers } from 'app/config/shared/api-servers.enum';

export class ApiBaseUrl {
    static get(env): string {
        switch (env) {
            case ApiServers.staiging: {
                return 'http://bankpaletapi.artygeek.net/api/';
            }
            case ApiServers.test: {
                return 'http://bankpaletapitest.artygeek.net/api/';
            }
            case ApiServers.dev: {
                return 'http://localhost:57000/api/';
               
            }
        }
    }
}
