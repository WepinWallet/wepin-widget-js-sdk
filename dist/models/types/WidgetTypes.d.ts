import { SetAccountsRequest } from './request/toSdk/SetAccounts';
export interface widgetAndResult<T> {
    widget: T;
    data: SetAccountsRequest | string;
}
