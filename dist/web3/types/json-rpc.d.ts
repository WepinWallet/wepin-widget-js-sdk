export interface JsonRpcRequestPayload<TParams = unknown> {
    id?: string | number | null;
    method: string;
    params?: TParams;
    jsonrpc?: string;
    userId?: string;
    blockchain?: string;
    to?: string;
    from?: string;
}
export interface JsonRpcRequestCallback {
    /** Callback executed upon JSON RPC response. */
    (err: JsonRpcError | null, result?: JsonRpcResponsePayload | null): void;
}
export interface JsonRpcBatchRequestCallback {
    /** Callback executed upon JSON RPC response. */
    (err: JsonRpcError | null, result?: (JsonRpcResponsePayload | null)[] | null): void;
}
export interface JsonRpcError {
    message: string;
    code?: number;
    data?: unknown;
}
export interface JsonRpcResponsePayload<ResultType = unknown> {
    jsonrpc?: string;
    id?: string | number | null;
    result?: ResultType | null;
    error?: JsonRpcError | null;
    to?: string;
    from?: string;
}
export declare enum RpcErrorCode {
    PARSE_ERROR = -32700,
    INVALID_REQUEST = -32600,
    METHOD_NOT_FOUND = -32601,
    INVALID_PARAMS = -32602,
    INTERNAL_ERROR = -32603
}
