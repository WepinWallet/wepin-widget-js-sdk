import { Widget } from './Widget';
import { Wepin } from '../../Wepin';
import { WepinResponseMessage } from '../../types/Message';
export declare class WidgetFrame extends Widget {
    static scrollPosition: number;
    private constructor();
    static openNew(url: string, wepin: Wepin, wepinAppKey: string, widgetOptions?: {
        isHide?: boolean;
        specifiedEmail?: string;
    }): Promise<WidgetFrame>;
    protected expand(): void;
    protected shrink(): void;
    protected _closeWebview(): void;
    protected _post(message: WepinResponseMessage): void;
}
