import { JsonRpcResponsePayload } from '@/web3/types/json-rpc';
import { etherProvider } from '@/web3/etherProvider';
export interface RequestArguments {
    method: string;
    params?: unknown;
    [key: string]: unknown;
}
export declare class web3Provider {
    private readonly etherProvider;
    constructor(etherProvider: etherProvider);
    request(request: RequestArguments | RequestArguments[]): Promise<JsonRpcResponsePayload['result']>;
    sendAsync?: (request: {
        method: string;
        params?: Array<unknown>;
    }, callback: (error: unknown, response: unknown) => void) => void;
}
