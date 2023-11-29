import { Overlay } from '../../models/widget/overlay/Overlay';
import { Wepin } from '../../Wepin';
import { WepinRequestMessage, WepinResponseMessage } from '../../types/Message';
/**
 * Basically, Widget has control over Webview.
 * Client must not handle this object directly.
 * It Also has informations about Webview itself.
 */
export declare abstract class Widget extends Overlay {
    protected readonly id: string;
    readonly url: string;
    readonly type: 'Frame' | 'Window';
    readonly isHide: boolean;
    readonly specifiedEmail: string;
    private EL;
    protected _open: boolean;
    get isOpen(): boolean;
    private _wepin;
    get Wepin(): Wepin;
    private _webview;
    get Webview(): HTMLIFrameElement | Window;
    clearWebview(): void;
    protected constructor(url: string, wepin: Wepin, webview: Window | HTMLIFrameElement, type: 'Frame' | 'Window', wepinAppKey: string, isHide?: boolean, specifiedEmail?: string);
    protected abstract expand(): void;
    protected abstract shrink(): void;
    protected abstract _post(message: WepinResponseMessage | WepinRequestMessage): void;
    protected abstract _closeWebview(): void;
    close(): void;
    response(data: WepinResponseMessage): void;
    request(data: WepinRequestMessage): void;
}
