export default class Utils {
    static isMobile(): boolean;
    static isWebview(): boolean;
    static messages(): {
        hasValidOrigin: (message: MessageEvent) => boolean;
    };
    static get urls(): {
        wepinSdkApi: string;
        wepinWebview: string;
    };
    static uuidv4(): string;
}
