import type { APIRequestConstructorParameter, RequestMethod, Headers, RequestData, URLParams } from './APITypes';
declare class APIRequest<THeaders extends Headers | undefined = undefined, TData extends RequestData = unknown, TURLParams extends URLParams | unknown = unknown> {
    data?: TData;
    headers?: THeaders;
    url: string;
    urlParams?: TURLParams;
    withCredentials: boolean;
    method: RequestMethod;
    constructor({ data, headers, url, urlParams, withCredentials, method, }: APIRequestConstructorParameter<THeaders, TData, TURLParams>);
}
export default APIRequest;
