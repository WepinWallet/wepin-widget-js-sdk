import APIRequest from '@/api/APIRequest';
import FetchAPI from '@/api/FetchAPI';
import type { InitResponse } from './AppAPITypes';
declare class AppAPI extends FetchAPI {
    constructor(baseUrl: string);
    getIpClient(): Promise<any>;
    initApp(appKey: string): Promise<InitResponse<APIRequest<{
        Accept: string;
        'Content-Type': string;
        'X-API-KEY': string;
    }, unknown, {
        platform: number;
    }>>>;
}
export default AppAPI;
