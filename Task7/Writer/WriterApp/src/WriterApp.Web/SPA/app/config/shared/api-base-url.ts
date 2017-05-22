import { ApiServers } from "./api-servers.enum";

export class ApiBaseUrl {
    static get(env): string {
        switch (env) {
            case ApiServers.dev: {
                return '/api/';
            }
        }
    }
}
