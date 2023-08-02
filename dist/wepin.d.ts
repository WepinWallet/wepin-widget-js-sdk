import type { IAttributes } from '@wepin/types';
import { modeByAppKey } from './types/modeByAppKey';
import { Widget } from './models/widget/Widget';
import SafeEventEmitter from './utils/safeEventEmitter';
import { Account } from './types/Account';
import type { WepinRequestMessage } from './types/Message';
/**
 * It is entry of Wepin features.
 * Client must use this object to use Wepin.
 */
export declare class Wepin extends SafeEventEmitter {
    wepinAppId: string;
    wepinAppKey: string;
    wepinDomain: string;
    wepinAppAttributes: IAttributes;
    private _widget;
    accountInfo: Account[];
    private _modeByAppKey;
    _isInitialized: boolean;
    queue: WepinRequestMessage[];
    constructor();
    setAccountInfo(accounts: Account[]): void;
    get Widget(): Widget;
    private setModeByAppKey;
    get modeByAppKey(): modeByAppKey;
    toJSON(): string;
    /**
     * Initialize Wepin Object. It returns widget instance.
     */
    init(appId: string, appKey: string, attributes?: IAttributes): Promise<Wepin>;
    /**
     * Check if wepin is initialized.
     *
     * @returns
     */
    isInitialized(): boolean;
    /**
     * It opens widget window.
     */
    openWidget(): Promise<void>;
    /**
     * It closes widget itself.
     */
    closeWidget(): void;
    /**
     * Returns available account list. It can be only usable after widget login.
     * It returns all the accounts once parameter is empty.
     *
     * @param networks list of network wanted to get return
     * @returns
     */
    getAccounts(networks?: string[]): Promise<{
        address: string;
        network: string;
    }[]>;
}
