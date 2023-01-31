import { BigNumber, ethers } from 'ethers';
import { Wepin } from '@/wepin';
import { Blockchain, Network } from '@/web3/types/blockchain';
import { JsonRpcRequestPayload, JsonRpcResponsePayload } from '@/web3/types/json-rpc';
type providerParams = {
    wepin: Wepin;
    network?: string;
};
export declare class etherProvider {
    private readonly widget;
    private readonly wepin;
    constructor({ network, wepin }: providerParams);
    getAddresses(network?: string): Promise<string[]>;
    getBalance(address: string, contractAddress?: string): Promise<BigNumber>;
    ownerOf(contractAddress: string, tokenId: string): Promise<string>;
    logout(): Promise<void>;
    getCurrentUser(): Promise<any>;
    isLoggedIn(): Promise<boolean>;
    ready(): Promise<void>;
    sendRpc<T>(rpcPayload: JsonRpcRequestPayload): Promise<JsonRpcResponsePayload<T>['result']>;
    getBlockchainFromNetwork(network?: Network): Blockchain;
    decodeData(serializedTx: string, abi: string[]): Promise<{
        name: string;
        args: ethers.utils.Result;
    }>;
    encodeData(abi: string[], functionFragment: string, args?: any[]): Promise<string>;
}
export {};
