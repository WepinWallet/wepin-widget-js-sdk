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
import Utils from '../../utils/utils';
import { Widget } from './Widget';
var widgetFrame = /** @class */ (function (_super) {
    __extends(widgetFrame, _super);
    function widgetFrame(url, useOverlay, request, wepin) {
        var _this = _super.call(this, url, useOverlay, request, wepin) || this;
        _this.iframeId = "id-".concat(Utils.uuidv4());
        return _this;
    }
    widgetFrame.openNew = function (url, request, wepin) {
        return __awaiter(this, void 0, void 0, function () {
            var wepinWidget, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wepinWidget = new widgetFrame(url, true, request, wepin);
                        return [4 /*yield*/, wepinWidget.open()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { widget: wepinWidget, data: data }];
                }
            });
        });
    };
    widgetFrame.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this.widgetWebviewEventListener = _this.createWidgetWebviewEventListener(resolve, reject);
                            window.addEventListener('message', _this.widgetWebviewEventListener);
                            try {
                                var iframeElement = document.createElement('iframe');
                                iframeElement.id = _this.iframeId;
                                iframeElement.classList.add(widgetFrame.CONST.widgetFrameClassName);
                                iframeElement.setAttribute('frameborder', '0');
                                iframeElement.setAttribute('marginwidth', '0');
                                iframeElement.setAttribute('marginheight', '0');
                                iframeElement.style.borderRadius = '12px';
                                iframeElement.style.width = '360px';
                                iframeElement.style.height = '480px';
                                iframeElement.style.maxHeight = '1000px';
                                iframeElement.style.position = 'absolute';
                                iframeElement.style.top = '50%';
                                iframeElement.style.left = '50%';
                                iframeElement.style.transform = 'translate(-50%, -50%)';
                                iframeElement.style.zIndex = '408888000000';
                                iframeElement.title = 'wepin sdk webview';
                                iframeElement.src = _this.url;
                                iframeElement.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                                iframeElement.allowFullscreen = true;
                                document.body.appendChild(iframeElement);
                                _this.widget = iframeElement;
                            }
                            catch (e) {
                                console.debug('popup open failed', e);
                            }
                        }).then(function (data) {
                            console.log('widget open data', data);
                            _this.setCloseInterval();
                            return data;
                        })];
                    case 1:
                        _a.sent();
                        console.log('widget open this.widget', this.widget);
                        return [2 /*return*/];
                }
            });
        });
    };
    widgetFrame.prototype.closeWidget = function () {
        console.log('widget closeWidget', this.widget);
        if (this.widget) {
            document.body.removeChild(this.widget);
            this.widget = undefined;
        }
    };
    Object.defineProperty(widgetFrame.prototype, "closed", {
        get: function () {
            if (this.widget) {
                return false;
            }
            else {
                return true;
            }
        },
        enumerable: false,
        configurable: true
    });
    widgetFrame.CONST = {
        widgetFrameClassName: 'wepin-sdk-widget-iframe',
    };
    return widgetFrame;
}(Widget));
export { widgetFrame };
//# sourceMappingURL=widgetFrame.js.map