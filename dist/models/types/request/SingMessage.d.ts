import { InitRequest } from './init';
export interface SingMessageRequest extends InitRequest {
    message: string;
}
