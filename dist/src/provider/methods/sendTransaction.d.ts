import { UnvalidatedJsonRpcRequest } from '../types/EIP1193';
import { CreateWepinMiddlewareOptions } from '../types/wepinMiddlewareOptions';
export declare const sendTransaction: ({ wepin, network }: CreateWepinMiddlewareOptions) => (req: UnvalidatedJsonRpcRequest, res: any, next: any, end: any) => void;
