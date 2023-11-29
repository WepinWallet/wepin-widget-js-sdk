import type { IAttributes, WepinLifeCycle, IWepinUser } from '@wepin/types';
import { modeByAppKey } from './types/modeByAppKey';
import { Widget } from './models/widget/Widget';
import SafeEventEmitter from './utils/safeEventEmitter';
import { Account } from './types/Account';
import type { WepinRequestMessage } from './types/Message';
import { SupportedChains } from './provider/types/Networks';
/**
 * It is entry of Wepin features.
 * Client must use this object to use Wepin.
 */
export declare class Wepin extends SafeEventEmitter {
    #private;
    version: string;
    wepinAppId: string;
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
    private _open;
    /**
     * It closes widget itself.
     */
    closeWidget(): void;
    private _close;
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
    setUserInfo(userInfo: IWepinUser, withEmit?: boolean): void;
    /**
     * Returns lifecycle of wepin.
     * The lifecycle of the wepin is defined as follows.
     *  - 'not_initialized': if wepin is not initialized
     *  - 'initializing': if wepin is initializing
     *  - 'initialized': if wepin is initialized
     *  - 'before_login': if wepin is initialized but the user is not logged in
     *  - 'login': if the user is logged in
     *
     * @returns WepinLifeCycle
     */
    getStatus(): WepinLifeCycle;
    /**
     * Returns the user's login information. It can be only usable after widget login.
     *
     * @param email Encourage users to log in with the email specified in the app.
     * @returns
     */
    login(email?: string): Promise<IWepinUser>;
    /**
     * Function to handle user logout.
     *
     * @returns {Promise<void>}
     */
    logout(): Promise<void>;
    private _initQueue;
    finalize(): void;
    getNetworkByChainId: (chainId: unknown) => SupportedChains;
    getNetworkInfoByName: (network: SupportedChains) => import("./provider/utils/info").NetworkInformation;
    /**
     * It returns a Provider by given network, chainId.
     *
     * @reference https://docs.wepin.io/kr/wepin/supported-blockchain
     * @param options - An options bag
     * @param options.network - Available chains Wepin helps provide.
     *  It should be lowercase.
     * @returns A EIP-1193 provider
     */
    getProvider({ network }: {
        network: SupportedChains;
    }): any;
}
