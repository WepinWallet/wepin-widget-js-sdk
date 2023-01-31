import type APIRequest from './APIRequest';
import APIResponse from './APIResponse';
import type InterfaceAPI from './InterfaceAPI';
import type { URLParams, Headers, RequestData } from './APITypes';
declare class FetchAPI implements InterfaceAPI {
    baseUrl?: string;
    constructor(baseUrl?: string);
    send<Theaders extends Headers | undefined, TData extends RequestData, TURLParams extends URLParams, TAPIRequest extends APIRequest<Theaders, TData, TURLParams>, TAPIResponse extends APIResponse<unknown, unknown, TAPIRequest>>(request: TAPIRequest): Promise<TAPIResponse>;
    private getUrlWithParams;
    private convertHeadersToPlainObject;
}
export default FetchAPI;
