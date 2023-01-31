import type { InitRequest } from './init';
export interface GetAddressRequest extends InitRequest {
    network: string;
}
