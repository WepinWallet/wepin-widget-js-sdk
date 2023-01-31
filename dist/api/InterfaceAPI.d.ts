import type APIRequest from './APIRequest';
import type APIResponse from './APIResponse';
import type { Headers, URLParams, RequestData } from './APITypes';
interface InterfaceAPI {
    send: <Theaders extends Headers | undefined, TData extends RequestData, TURLParams extends URLParams, TAPIRequest extends APIRequest<Theaders, TData, TURLParams>, TAPIResponse extends APIResponse<unknown, unknown, TAPIRequest>>(request: TAPIRequest) => Promise<TAPIResponse>;
    baseUrl?: string;
}
export default InterfaceAPI;
