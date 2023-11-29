import { Widget } from '../../models/widget/Widget';
import { Wepin } from '../../Wepin';
import { WepinResponseMessage } from '../../types/Message';
export interface WidgetWindowFeatures {
    width: number;
    height: number;
    sLeft: number;
    sTop: number;
}
export declare class WidgetWindow extends Widget {
    private constructor();
    private static timer;
    static openNew(url: string, wepin: Wepin, wepinAppKey: string, widgetFeatures?: WidgetWindowFeatures, widgetOptions?: {
        isHide?: boolean;
        specifiedEmail?: string;
    }): Promise<WidgetWindow>;
    protected expand(): void;
    protected shrink(): void;
    protected _closeWebview(): void;
    protected _post(message: WepinResponseMessage): void;
}
