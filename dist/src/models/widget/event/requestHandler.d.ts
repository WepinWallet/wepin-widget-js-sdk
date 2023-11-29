import { WebviewReqestMessage } from '../../../types/Message';
import { Widget } from '../Widget';
/**
 * It handles all the request from the webview.
 *
 * @param message Webview 에서 온 MessageEvent.data
 * @param widget Window | Iframe
 */
export declare const WebviewRequestHandler: (message: WebviewReqestMessage, widget: Widget, wepinAppKey: string) => void;
