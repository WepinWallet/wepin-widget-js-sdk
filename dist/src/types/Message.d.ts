type WepinProvderCommand = 'request_enable' | 'sign_transaction' | 'send_transaction' | 'sign_typed_data' | 'sign' | 'wallet_switchEthereumChain';
type WepinAdminCommand = 'signup_email' | 'login_email' | 'register_wepin' | 'get_balance';
type WepinCommand = 'ready_to_widget' | 'initialized_widget' | 'set_accounts' | 'close_wepin_widget' | 'provider_request' | 'dequeue_request' | 'set_user_info' | 'wepin_logout' | 'set_local_storage' | 'set_user_email' | WepinProvderCommand | WepinAdminCommand;
export interface WebviewReqestMessage {
    header: {
        request_from: 'wepin_widget';
        request_to: 'web';
        id: number;
    };
    body: {
        command: WepinCommand;
        parameter: any;
    };
}
export interface WebviewResponseMessage {
    header: {
        response_from: 'wepin_widget';
        response_to: 'web';
        id: number;
    };
    body: {
        command: WepinCommand;
        state: 'ERROR' | 'SUCCESS';
        data: any;
    };
}
export interface WepinRequestMessage {
    header: {
        request_from: 'web';
        request_to: 'wepin_widget';
        id: number;
    };
    body: {
        command: WepinCommand;
        parameter: any;
    };
}
export interface WepinResponseMessage {
    header: {
        response_from: 'web';
        response_to: 'wepin_widget';
        id: number;
    };
    body: {
        command: WepinCommand;
        state: 'ERROR' | 'SUCCESS';
        data: any;
    };
}
export {};
