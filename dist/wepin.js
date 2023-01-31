var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { RequsetType } from './models/types/RequsetTypes';
import { WidgetMode } from './models/widget/WidgetAttribute';
import { widgetWindow } from './models/widget/widgetWindow';
import Utils from './utils/utils';
import WepinSdkAPI from './api/wepin/WepinSdkAPI';
import { widgetFrame } from './models/widget/widgetFrame';
import { floatImage } from './models/float/floatImage';
// import { etherProvider } from './web3/etherProvider'
// import { Provider } from './web3/provider'
var Wepin = /** @class */ (function () {
    // private etherProvider: etherProvider
    function Wepin() {
        this.wepinAppId = undefined;
        this.wepinAppKey = undefined;
        this.popupWindow = undefined;
        this.appInfo = undefined;
        this.pubKey = undefined;
        this.accountInfo = undefined;
        this.floatImage = undefined;
        this.api = new WepinSdkAPI();
        // this.etherProvider = new etherProvider({apiKey: this.wepinAppKey, network:'ethereum', url: Utils.urls.wepinWebview, wepin: this })
    }
    Object.defineProperty(Wepin.prototype, "setPubKey", {
        set: function (pubKey) {
            this.pubKey = pubKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wepin.prototype, "setAccountInfo", {
        set: function (accounts) {
            this.accountInfo = accounts;
        },
        enumerable: false,
        configurable: true
    });
    Wepin.prototype.init = function (appId, appKey, attributes) {
        return __awaiter(this, void 0, void 0, function () {
            var type, response, request, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("init");
                        console.log("init WepinAppId ", this.wepinAppId);
                        if (!this.isInitialized()) return [3 /*break*/, 1];
                        throw new Error('Wepin.init: Already initialized');
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        console.log("isInitialized WebinAppKey, WepinAppId ", this.wepinAppKey, this.wepinAppId);
                        console.log('attributes', attributes);
                        console.log('attributes?.type', attributes === null || attributes === void 0 ? void 0 : attributes.type);
                        type = (attributes === null || attributes === void 0 ? void 0 : attributes.type) || WidgetMode.HIDE;
                        console.log('type', type);
                        return [4 /*yield*/, this.api.app.initApp(appId, appKey)];
                    case 2:
                        response = _a.sent();
                        if (response.result !== 'ok') {
                            throw new Error('Wepin.init: failed initialize');
                        }
                        if (type === WidgetMode.SHOW) {
                            request = {
                                requestType: RequsetType.ONLY_OPEN,
                                params: { appId: appId, appKey: appKey }
                            };
                            this.openWidget(request).then(function (res) {
                                _this.popupWindow = res.widget;
                            });
                        }
                        else if (type == WidgetMode.FLOATING) {
                            //이미지 보여지도록..맨 밑에..
                            this.floatImage = floatImage.floatNew(this);
                        }
                        this.appInfo = response.appInfo;
                        this.wepinAppId = appId;
                        this.wepinAppKey = appKey;
                        return [2 /*return*/, response.result];
                    case 3:
                        e_1 = _a.sent();
                        throw new Error('Wepin.init: failed initialize');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // public getEtheProvider() : Provider {
    //     return new Provider(this.etherProvider)
    // }
    Wepin.prototype.isInitialized = function () {
        console.log("isInitialized WebinAppKey, WepinAppId ", this.wepinAppKey, this.wepinAppId);
        return ((this.wepinAppKey !== undefined) && (this.wepinAppId !== undefined));
    };
    Wepin.prototype.openWidget = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (Utils.isMobile()) {
                    return [2 /*return*/, widgetFrame.openNew(Utils.urls.wepinWebview, request, this)];
                }
                else {
                    return [2 /*return*/, widgetWindow.openNew(Utils.urls.wepinWebview, request, this)];
                }
                return [2 /*return*/];
            });
        });
    };
    Wepin.prototype.openWindow = function () {
        var _this = this;
        console.log("openWindow window", window);
        console.log("openWindow this.popupWindow", this.popupWindow);
        //widget.loadWidget()
        //const sdkUIBaseUrl = env.SDK_UI_URL
        //popupWindow.submitFormWithPopup(sdkUIBaseUrl)
        if (!this.isInitialized()) {
            throw new Error('Wepin.openWindow: wepin sdk widge have to be initialized');
        }
        try {
            if (!this.popupWindow || this.popupWindow.closed) {
                // this.pcWindow = widget.openWidget('show',this.wepinAppId, this.wepinAppKey)
                var request = {
                    requestType: RequsetType.ONLY_OPEN,
                    params: { appId: this.wepinAppId, appKey: this.wepinAppKey }
                };
                this.openWidget(request).then(function (res) {
                    _this.popupWindow = res.widget;
                });
            }
        }
        catch (e) {
            throw new Error('Wepin.openWeindow: Can\'t open wepin sdk widget');
        }
    };
    Wepin.prototype.closeWindow = function () {
        console.log("closeWindow this.popupWindow", this.popupWindow);
        if (!this.isInitialized()) {
            throw new Error('Wepin.openWindow: wepin sdk widge have to be initialized');
        }
        if (this.popupWindow) {
            this.popupWindow.close();
            // widget.closeWidget(this.pcWindow)
            this.popupWindow = undefined;
        }
        else {
            throw new Error('Wepin.openWeindow: wepin sdk widget is not existed');
        }
    };
    Wepin.prototype.getAddress = function (network) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            var _this = this;
            return __generator(this, function (_a) {
                console.log("getAddress");
                if (!this.isInitialized()) {
                    throw new Error('Wepin.openWindow: wepin sdk widge have to be initialized');
                }
                if (!this.pubKey || !this.accountInfo) {
                    request = {
                        requestType: RequsetType.GET_ADDRESS,
                        params: { appId: this.wepinAppId, appKey: this.wepinAppKey, network: network }
                    };
                    return [2 /*return*/, this.openWidget(request).then(function (res) {
                            _this.popupWindow = res.widget;
                            console.log("getAddress res.data ", res.data);
                            return res.data;
                        })
                        // if(Utils.isMobile()){
                        //     return widgetFrame.openNew(Utils.urls.wepinWebview, request, this).then((res) => {
                        //         this.popupWindow = res.widget
                        //         console.log("getAddress res.data ", res.data)  
                        //         return res.data
                        //     })
                        // }else{
                        //     return widgetWindow.openNew(Utils.urls.wepinWebview, request, this).then((res) => {
                        //         this.popupWindow = res.widget
                        //         console.log("getAddress res.data ", res.data)  
                        //         return res.data
                        //     })
                        // }
                    ];
                    // if(Utils.isMobile()){
                    //     return widgetFrame.openNew(Utils.urls.wepinWebview, request, this).then((res) => {
                    //         this.popupWindow = res.widget
                    //         console.log("getAddress res.data ", res.data)  
                    //         return res.data
                    //     })
                    // }else{
                    //     return widgetWindow.openNew(Utils.urls.wepinWebview, request, this).then((res) => {
                    //         this.popupWindow = res.widget
                    //         console.log("getAddress res.data ", res.data)  
                    //         return res.data
                    //     })
                    // }
                }
                else {
                    if (network) {
                        return [2 /*return*/, this.accountInfo.accounts.filter(function (account) { return account.network === network; })];
                    }
                    return [2 /*return*/, this.accountInfo.accounts];
                }
                return [2 /*return*/];
            });
        });
    };
    // getAssets() {
    //     console.log("getAssets")  
    // }
    Wepin.prototype.signMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            var _this = this;
            return __generator(this, function (_a) {
                console.log("signMessage");
                if (!this.isInitialized()) {
                    throw new Error('Wepin.openWindow: wepin sdk widge have to be initialized');
                }
                request = {
                    requestType: RequsetType.REQUEST_SIGN_MESSAGE,
                    params: { appId: this.wepinAppId, appKey: this.wepinAppKey, message: message }
                };
                return [2 /*return*/, this.openWidget(request).then(function (res) {
                        _this.popupWindow = res.widget;
                        console.log("signMessage res.data ", res.data);
                        return res.data;
                    })
                    // if(Utils.isMobile()){
                    //     return widgetFrame.openNew(Utils.urls.wepinWebview, request, this).then((res) => {
                    //         this.popupWindow = res.widget
                    //         console.log("getAddress res.data ", res.data)  
                    //         return res.data
                    //     })
                    // }else{
                    //     return widgetWindow.openNew(Utils.urls.wepinWebview, request, this).then((res) => {
                    //         this.popupWindow = res.widget
                    //         console.log("getAddress res.data ", res.data)  
                    //         return res.data
                    //     })
                    // }
                    // return this.pcWindow
                    // try{
                    //     if(!this.pcWindow || this.pcWindow.closed){
                    //         this.pcWindow = widget.openWidget('show', this.wepinAppId, this.wepinAppKey, 'signMessage')
                    //     }
                    // }catch(e){
                    //     throw new Error('Wepin.openWeindow: Can\'t open wepin sdk widget');
                    // }
                ];
            });
        });
    };
    return Wepin;
}());
export { Wepin };
// export default Wepin
//# sourceMappingURL=wepin.js.map