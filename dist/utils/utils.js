import * as uaParserJS from 'ua-parser-js';
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    Utils.isWebview = function () {
        var uaData = new uaParserJS().setUA(navigator.userAgent);
        return uaData.getBrowser().name.includes('WebView');
    };
    Utils.messages = function () {
        return {
            hasValidOrigin: function (message) {
                return message.origin === Utils.urls.wepinWebview;
            },
            hasType: function (message) {
                return message.data && message.data.type && message.data.type !== '';
            },
            isOfType: function (message, messageType) {
                return Utils.messages().hasType(message) && message.data.type === messageType.toString();
            },
            // hasCorrectCorrelationID(message: MessageEvent,
            //                         correlationID: string | undefined) {
            //     return correlationID && message.data && message.data.correlationID === correlationID;
            // }
        };
    };
    Object.defineProperty(Utils, "urls", {
        get: function () {
            return {
                wepinSdkApi: "http://localhost:8850",
                wepinWebview: "http://localhost:8989",
                // wepinSdkApi: `https://dev-sdkapi.wepin.io`,
                // wepinWebview: `https://dev-widget.wepin.io`,
            };
        },
        enumerable: false,
        configurable: true
    });
    Utils.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Utils;
}());
export default Utils;
//# sourceMappingURL=utils.js.map