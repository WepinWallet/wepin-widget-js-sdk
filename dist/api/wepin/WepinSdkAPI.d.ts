import FetchAPI from '@/api/FetchAPI';
import AppAPI from '@/api/wepin/app/AppAPI';
import { modeByAppKey } from '@/types/modeByAppKey';
declare class WepinSdkAPI extends FetchAPI {
    app: AppAPI;
    constructor(modeByAppKey: modeByAppKey);
}
export default WepinSdkAPI;
