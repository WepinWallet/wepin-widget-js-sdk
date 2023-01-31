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
import APIResponse from './APIResponse';
var FetchAPI = /** @class */ (function () {
    function FetchAPI(baseUrl) {
        this.baseUrl = baseUrl;
    }
    FetchAPI.prototype.send = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var url, urlParams, method, data, headers, baseFullUrl, urlWithParams, response, responseData, responseHeaders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = request.url, urlParams = request.urlParams, method = request.method, data = request.data, headers = request.headers;
                        baseFullUrl = this.baseUrl + url;
                        urlWithParams = this.getUrlWithParams(baseFullUrl, urlParams);
                        return [4 /*yield*/, fetch(urlWithParams, {
                                method: method,
                                headers: Object.assign(headers || {}, {
                                    'Content-Type': 'application/json',
                                }),
                                body: typeof data !== 'string' ? JSON.stringify(data) : data,
                                credentials: request.withCredentials ? 'include' : 'same-origin',
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseData = _a.sent();
                        responseHeaders = this.convertHeadersToPlainObject(response.headers);
                        return [2 /*return*/, new APIResponse({
                                data: responseData,
                                status: response.status,
                                headers: responseHeaders,
                                request: request,
                            })];
                }
            });
        });
    };
    FetchAPI.prototype.getUrlWithParams = function (url, urlParams) {
        if (!urlParams)
            return url;
        var urlObj = new URL(url);
        Object.entries(urlParams).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            urlObj.searchParams.append(key, value);
        });
        return urlObj.toString();
    };
    FetchAPI.prototype.convertHeadersToPlainObject = function (headers) {
        var plainObject = {};
        for (var _i = 0, _a = Object.keys(headers); _i < _a.length; _i++) {
            var key = _a[_i];
            plainObject[key] = headers.get(key);
        }
        return plainObject;
    };
    return FetchAPI;
}());
export default FetchAPI;
//# sourceMappingURL=FetchAPI.js.map