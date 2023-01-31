import { widgetWindow } from '@/models/widget/widgetWindow';
import { widgetFrame } from '@/models/widget/widgetFrame';
import { SetAccountsRequest } from '@/models/types/request/toSdk/SetAccounts';
import type { TxDataType } from '@/models/types/request/toWidget/SendTransaction';
import { ReadyToWidgetResponse } from '@/models/types/response/toWidget/ReadyToWidget';
import type { IAccount, IAttributes, IWepin } from '@wepin/types';
export declare class Wepin implements IWepin {
    private wepinAppId;
    private wepinAppKey;
    private wepinAppAttributes;
    private wepinAppStage;
    popupWindow: widgetWindow | widgetFrame;
    private api;
    private appInfo;
    private accountInfo;
    private floatImage;
    constructor();
    set setAccountInfo(accounts: SetAccountsRequest);
    init(appId: string, appKey: string, attributes?: IAttributes): Promise<boolean>;
    get initializedData(): ReadyToWidgetResponse;
    isInitialized(): boolean;
    private openWindow;
    openWidget(): Promise<void>;
    closeWidget(): void;
    getAccounts(networks?: string[]): Promise<IAccount[] | undefined>;
    signMessage(message: string): Promise<string>;
    sendTransaction(txObj: TxDataType): Promise<string>;
}
