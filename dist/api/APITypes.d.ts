export type APIResponseConstructorParameter<Header, TData extends ResponseData | undefined | unknown, TAPIRequest> = {
    data?: TData;
    status: number;
    headers?: Header;
    request: TAPIRequest;
};
export type APIRequestConstructorParameter<Header, TData extends RequestData, URLParams> = {
    data?: TData;
    headers?: Header;
    url: string;
    urlParams?: URLParams;
    withCredentials?: boolean;
    method: RequestMethod;
};
export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type URLParams = {
    [index: string]: string;
} | undefined | unknown;
export type Headers = Record<string, string>;
export type ResponseData = Record<string, any> | undefined;
export type RequestData = Record<string, any> | unknown | undefined;
