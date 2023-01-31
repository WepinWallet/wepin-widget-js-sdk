var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import FetchAPI from '../FetchAPI';
import AppAPI from './app/AppAPI';
import Utils from '../../utils/utils';
var WepinSdkAPI = /** @class */ (function (_super) {
    __extends(WepinSdkAPI, _super);
    function WepinSdkAPI() {
        var _this = _super.call(this, Utils.urls.wepinSdkApi) || this;
        _this.app = new AppAPI(_this.baseUrl);
        return _this;
    }
    return WepinSdkAPI;
}(FetchAPI));
export default WepinSdkAPI;
//# sourceMappingURL=WepinSdkAPI.js.map