import type { SetAccountsRequest } from './request/toSdk/SetAccounts';
import type { LoginRequest } from './request/toSdk/Login';
import type { InitRequest } from './request/toWidget/Init';
import type { SendTransactionRequest } from './request/toWidget/SendTransaction';
import type { SingMessageRequest } from './request/toWidget/SingMessage';
import type { SendTransactionResponse } from './response/toSdk/SendTransaction';
import type { SignMessageResponse } from './response/toSdk/SignMessage';
import type { LoginResponse } from './response/toWidget/Login';
import { ReadyToWidgetResponse } from './response/toWidget/ReadyToWidget';
export declare namespace WepinSDKType {
    export interface WepinCommand {
        header: CommandHeaderType;
        body: CommandBodyType;
    }
    export interface WepinRequestCommand {
        header: RequestHeader;
        body: RequestBody;
    }
    export interface WepinResponseCommand {
        header: ResponseHeader;
        body: ResponseBody;
    }
    export interface RequestBody {
        command: CommandType;
        parameter?: toSdkRequestParameterType | toWidgetRequestParameterType;
    }
    export interface ResponseBody {
        command: CommandType;
        state: 'ERROR' | 'SUCCESS';
        data: toSdkResponseDataType | toWidgetResponseDataType;
    }
    export type CommandHeaderType = RequestHeader | ResponseHeader;
    export interface RequestHeader {
        request_to: targetList;
        request_from: targetList;
        id: number;
    }
    export interface ResponseHeader {
        response_to: targetList;
        response_from: targetList;
        id: number;
    }
    export type CommandBodyType = RequestBody | ResponseBody;
    type targetList = 'web' | 'native' | 'wepin_widget';
    export type CommandType = toSdkCommandType | toWidgetCommandType;
    export type toSdkCommandType = 'ready_to_widget' | 'close_wepin_widget' | 'expand_wepin_widget' | 'shrink_wepin_widget' | 'set_accounts' | 'login_wepin' | 'logout_wepin';
    export type toWidgetCommandType = 'init_widget' | 'sign_message' | 'send_transaction';
    export type toSdkRequestParameterType = SetAccountsRequest | LoginRequest;
    export type toWidgetRequestParameterType = InitRequest | SendTransactionRequest | SingMessageRequest;
    export type toSdkResponseDataType = SendTransactionResponse | SignMessageResponse | string;
    export type toWidgetResponseDataType = LoginResponse | ReadyToWidgetResponse;
    export {};
}
