import { Widget } from '@/models/widget/Widget';
import { Wepin } from '@/Wepin';
import { WepinResponseMessage } from '@/types/Message';
export interface WidgetWindowFeatures {
    width: number;
    height: number;
    sLeft: number;
    sTop: number;
}
export declare class WidgetWindow extends Widget {
    private constructor();
    static openNew(url: string, wepin: Wepin, widgetFeatures?: WidgetWindowFeatures): Promise<WidgetWindow>;
    protected expand(): void;
    protected shrink(): void;
    protected _closeWebview(): void;
    protected _post(message: WepinResponseMessage): void;
}
