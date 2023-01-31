import { overlay } from './overlay/overlay';
import Utils from "../../utils/utils";
import { MessageType } from "../types/MessageTypes";
import { RequsetType } from "../types/RequsetTypes";
var Widget = /** @class */ (function () {
    function Widget(url, useOverlay, request, wepin) {
        this.id = "id-".concat(Utils.uuidv4());
        this.url = url;
        this.useOverlay = typeof useOverlay !== 'undefined' ? useOverlay : true;
        this.request = request;
        this.wepin = wepin;
        this.openOverlay();
    }
    Widget.prototype.setCloseInterval = function () {
        var _this = this;
        this.closeInterval = window.setInterval(function () {
            console.log('widget setInterval');
            if (!_this.widget || _this.closed) {
                _this.close();
            }
        }, 100);
    };
    Widget.prototype.clearCloseInterval = function () {
        window.clearInterval(this.closeInterval);
    };
    Widget.prototype.createWidgetWebviewEventListener = function (resolve, reject) {
        var _this = this;
        return function (message) {
            console.log('widget createWidgetWebviewMountedListener', message);
            console.log('widget Utils.messages().hasValidOrigin(message)', Utils.messages().hasValidOrigin(message));
            console.log('widget Utils.messages().isOfType(message, MessageType.READY_TO_WIDGET)', Utils.messages().isOfType(message, MessageType.READY_TO_WIDGET));
            if (Utils.messages().hasValidOrigin(message)) {
                var res = message.data;
                if (Utils.messages().isOfType(message, MessageType.READY_TO_WIDGET)) {
                    console.log('READY_TO_WIDGET');
                    var requstData = {
                        requestType: _this.request.requestType,
                        params: _this.request.params
                    };
                    message.source.postMessage(requstData, _this.url);
                    // if(this.request.requestType === RequsetType.ONLY_OPEN){
                    //     this.removeWidgetWebviewEventListener()
                    //     if(res.state != 'SUCCESS'){
                    //         reject(res.errorMessage)
                    //     }
                    //     resolve(res.response);
                    // }
                }
                else if (Utils.messages().isOfType(message, MessageType.CLOSE_WIDGET)) {
                    console.log('CLOSE_WIDGET');
                    if (_this.widgetWebviewEventListener) {
                        _this.removeWidgetWebviewEventListener();
                    }
                    _this.close();
                }
                else if (Utils.messages().isOfType(message, MessageType.SET_PUBKEY)) {
                    console.log('SET_PUBKEY');
                    _this.wepin.setPubKey = res.response.pubKey;
                }
                else if (Utils.messages().isOfType(message, MessageType.SET_ACCOUNTS)) {
                    console.log('SET_ACCOUNTS');
                    _this.wepin.setAccountInfo = res.response.accounts;
                    if (_this.request.requestType === RequsetType.GET_ADDRESS) {
                        if (_this.widgetWebviewEventListener) {
                            _this.removeWidgetWebviewEventListener();
                        }
                        resolve(res.response);
                    }
                }
                else if (Utils.messages().isOfType(message, MessageType.GET_RESPONSE)) {
                    console.log('GET_RESPONSE');
                    if (_this.widgetWebviewEventListener) {
                        _this.removeWidgetWebviewEventListener();
                        if (_this.request.requestType === RequsetType.ONLY_OPEN && Utils.isMobile()) {
                            _this.widgetWebviewEventListener = _this.createCloseWidgetWebviewEventListener();
                            window.addEventListener('message', _this.widgetWebviewEventListener);
                        }
                    }
                    if (res.state != 'SUCCESS') {
                        reject(res.errorMessage);
                    }
                    switch (_this.request.requestType) {
                        case RequsetType.ONLY_OPEN:
                        // case RequsetType.GET_ADDRESS:
                        case RequsetType.REQUEST_SIGN_MESSAGE:
                        case RequsetType.REQUEST_TX_DATA:
                            resolve(res.response);
                            break;
                        default:
                            reject(res.errorMessage);
                    }
                }
            }
        };
    };
    Widget.prototype.createCloseWidgetWebviewEventListener = function () {
        var _this = this;
        return function (message) {
            console.log('widget createCloseWidgetWebviewEventListener', message);
            console.log('widget Utils.messages().hasValidOrigin(message)', Utils.messages().hasValidOrigin(message));
            console.log('widget Utils.messages().isOfType(message, MessageType.CLOSE_WIDGET)', Utils.messages().isOfType(message, MessageType.CLOSE_WIDGET));
            if (Utils.messages().hasValidOrigin(message)) {
                var res = message.data;
                if (Utils.messages().isOfType(message, MessageType.CLOSE_WIDGET)) {
                    console.log('CLOSE_WIDGET');
                    if (_this.widgetWebviewEventListener) {
                        _this.removeWidgetWebviewEventListener();
                    }
                    _this.close();
                }
            }
        };
    };
    Widget.prototype.removeWidgetWebviewEventListener = function () {
        if (this.widgetWebviewEventListener) {
            window.removeEventListener('message', this.widgetWebviewEventListener);
            delete this.widgetWebviewEventListener;
        }
    };
    Widget.prototype.focus = function () {
        console.log('widget focus');
        if (this.widget || !this.closed) {
            this.widget.focus();
        }
    };
    // public get closed(): boolean {
    //     if (this.widget) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    Widget.prototype.close = function () {
        console.log('widget close');
        this.closeWidget();
        this.closeOverlay();
        this.clearCloseInterval();
        this.removeWidgetWebviewEventListener();
    };
    Widget.prototype.closeOverlay = function () {
        overlay.closeOverlay(this.id, this.useOverlay);
    };
    Widget.prototype.openOverlay = function () {
        overlay.openOverlay(this.id, this.useOverlay, this.focus, this.close);
    };
    return Widget;
}());
export { Widget };
//# sourceMappingURL=Widget.js.map