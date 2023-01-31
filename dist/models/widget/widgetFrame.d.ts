import { widgetAndResult } from '@/models/types/WidgetTypes';
import { Widget } from './Widget';
import { Wepin } from '@/wepin';
import { WepinSDKType } from '@/models/types/wepinSdk';
export declare class widgetFrame extends Widget {
    private static CONST;
    static openNew(url: string, request: WepinSDKType.RequestBody | undefined, wepin: Wepin): Promise<widgetAndResult<widgetFrame>>;
    private readonly iframeId;
    private scrollPosition;
    private constructor();
    private open;
    protected expand(): void;
    protected shrink(): void;
    protected closeWidget(): void;
    get closed(): boolean;
}
