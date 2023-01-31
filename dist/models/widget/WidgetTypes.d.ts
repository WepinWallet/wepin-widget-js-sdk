import { GetAddressRequest } from "../types/request/getAddress";
import { InitRequest } from "../types/request/init";
import { SingMessageRequest } from "../types/request/SingMessage";
import { RequsetType } from "../types/RequsetTypes";
import { MessageType } from "../types/MessageTypes";
export interface WidgetRequset {
    requestType: RequsetType;
    params: InitRequest | GetAddressRequest | SingMessageRequest;
}
export interface WidgetMessage {
    type: MessageType;
    requestType: RequsetType;
    state: 'SUCCESS' | 'ERROR';
    response?: any;
    errorMessage?: String;
}
export interface widgetAndResult<T> {
    widget: T;
    data: any;
}
