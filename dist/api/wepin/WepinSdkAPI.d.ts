import FetchAPI from '@/api/FetchAPI';
import AppAPI from '@/api/wepin/app/AppAPI';
declare class WepinSdkAPI extends FetchAPI {
    app: AppAPI;
    constructor();
}
export default WepinSdkAPI;
