var APIRequest = /** @class */ (function () {
    function APIRequest(_a) {
        var data = _a.data, headers = _a.headers, url = _a.url, urlParams = _a.urlParams, _b = _a.withCredentials, withCredentials = _b === void 0 ? false : _b, method = _a.method;
        this.data = data;
        this.headers = headers;
        this.url = url;
        this.urlParams = urlParams;
        this.withCredentials = withCredentials;
        this.method = method;
    }
    return APIRequest;
}());
export default APIRequest;
//# sourceMappingURL=APIRequest.js.map