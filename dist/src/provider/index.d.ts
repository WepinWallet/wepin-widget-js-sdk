import { Wepin } from '..';
import { SupportedChains } from './types/Networks';
/**
 * It returns a Provider by given network, chainId.
 *
 * @reference https://docs.wepin.io/kr/wepin/supported-blockchain
 * @param options - An options bag
 * @param options.network - Available chains Wepin helps provide.
 *  It should be lowercase.
 * @returns A EIP-1193 provider
 */
declare function getProvider({ network, wepin, }: {
    network: SupportedChains;
    wepin: Wepin;
}): any;
declare const _default: {
    getProvider: typeof getProvider;
    getNetworkInfoByName: (network: SupportedChains) => import("./utils/info").NetworkInformation;
    getNetworkByChainId: (chainId: unknown) => SupportedChains;
};
export default _default;
