import { Widget } from './models/widget/Widget';
import { Account } from './types/Account';
import type { WepinRequestMessage } from './types/Message';
import { modeByAppKey } from './types/modeByAppKey';
import SafeEventEmitter from './utils/safeEventEmitter';
import type { IAttributes, IWepinUser, WepinLifeCycle } from '@wepin/types';
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
    setAccountInfo(accounts: Account[], detaliAccount?: any): void;
    get Widget(): Widget;
    private setModeByAppKey;
    get modeByAppKey(): modeByAppKey;
    toJSON(): string;
    /**
     * Initialize Wepin Object. It returns widget instance.
     */
    init(appId: string, appKey: string, attributes?: IAttributes): Promise<Wepin>;
    private isLogedIn;
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
     *  - 'login_before_register': if the user is email logged in but the user is NOT registered in wepin
     *
     * @returns WepinLifeCycle
     */
    getStatus(): WepinLifeCycle;
    /**
     * Returns the user's login information.
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
    private registerWithWidget;
    /**
     * sign-in with external token(idToken) of dapp service. Returns the user's login information.
     *
     * @param token external token for login
     * @param sign signature of token
     * @param withUI (optional)if true, it opens widget window
     * @returns
     */
    loginWithExternalToken(token: string, sign: string, withUI?: boolean): Promise<IWepinUser>;
    /**
     * It signs up on the wepin with your email and password.
     *
     * @param email user email
     * @param password user passwrod
     * @returns 'true' if signup is successful, 'false' if it fails
     */
    signUpWithEmailAndPassword(email: string, password: string): Promise<boolean>;
    /**
     * It logs in to the Wepin with your email and password.
     * Returns the user's login information.
     *
     * @param email user email
     * @param password user passwrod
     * @returns userInfo
     */
    loginWithEmailAndPassword(email: string, password: string): Promise<IWepinUser>;
    /**
     * After the signup and login are completed, the Wepin service registration (wallet and account creation) will proceed.
     *
     * @param pin wallet pin
     * @returns 'true' if register is successful, 'false' if it fails
     */
    register(pin: string): Promise<boolean>;
    /**
     * Returns the account's balance information. It can be only usable after widget login.
     *
     * @param account account info
     * @returns account balance info
     */
    getBalance(account: Account): Promise<any>;
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
