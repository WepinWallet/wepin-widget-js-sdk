import { widgetAndResult } from '@/models/types/WidgetTypes';
import { Widget } from '@/models/widget/Widget';
import { Wepin } from '@/wepin';
import { WepinSDKType } from '@/models/types/wepinSdk';
export declare class widgetWindow extends Widget {
    static openNew(url: string, request: WepinSDKType.RequestBody | undefined, wepin: Wepin): Promise<widgetAndResult<widgetWindow>>;
    private static getPopupFeatures;
    private readonly target;
    private readonly features;
    private constructor();
    private open;
    protected expand(): void;
    protected shrink(): void;
    protected closeWidget(): void;
    get closed(): boolean;
}
