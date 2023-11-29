import { modeByAppKey } from '../types/modeByAppKey';
export default class Utils {
    static isMobile(): boolean;
    static messages(modeByAppKey: modeByAppKey): {
        hasValidOrigin: (message: MessageEvent) => boolean;
    };
    static getUrls(modeByAppKey: modeByAppKey): {
        wepinWebview: string;
    };
    static uuidv4(): string;
    static getLocalStorgeEnabled(): boolean;
    static setLocalStorage(appId: string, value: unknown): void;
    static getLocalStorage(appId: string): any;
    static clearLocalStorage(appId: string): void;
    static isExpired(token: string): boolean;
}
