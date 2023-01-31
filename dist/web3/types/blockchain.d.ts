export declare enum Network {
    ETHEREUM = "ethereum",
    /** @deprecated NETWORK */
    ROPSTEN = "ropsten",
    GOERLI = "goerli",
    POLYGON = "polygon",
    MUMBAI = "mumbai",
    BNB_SMART_CHAIN = "bnb_smart_chain",
    BNB_SMART_CHAIN_TESTNET = "bnb_smart_chain_testnet",
    KLAYTN = "klaytn",
    BAOBAB = "baobab",
    SOLANA = "solana",
    SOLANA_DEVNET = "solana_devnet",
    NEAR = "near",
    NEAR_TESTNET = "near_testnet",
    BORA = "bora",
    BORA_TESTNET = "bora_testnet",
    /** @deprecated use ETHEREUM */
    ETH_MAINNET = "ethereum",
    /** @deprecated use ROPSTEN */
    ETH_TESTNET = "ropsten",
    /** @deprecated use POLYGON */
    MATIC_MAINNET = "polygon",
    /** @deprecated use MUMBAI */
    MATIC_TESTNET = "mumbai",
    /** @deprecated use BNB_SMART_CHAIN */
    BINANCE_COIN_MAINNET = "bnb_smart_chain",
    /** @deprecated use BNB_SMART_CHAIN_TESTNET */
    BINANCE_COIN_TESTNET = "bnb_smart_chain_testnet",
    /** @deprecated use KLAYTN */
    KLAYTN_MAINNET = "klaytn",
    /** @deprecated use BAOBAB */
    KLAYTN_TESTNET = "baobab"
}
export declare const isSupportedNetwork: (network?: Network) => boolean;
export declare const NetworkChainIdMap: {
    [key in Network | number]: Network | number;
};
export declare enum Blockchain {
    ETHEREUM = "ETHEREUM",
    POLYGON = "POLYGON",
    BNB_SMART_CHAIN = "BNB_SMART_CHAIN",
    KLAYTN = "KLAYTN",
    SOLANA = "SOLANA",
    NEAR = "NEAR",
    BORA = "BORA"
}
export declare function networkToBlockchain(network: Network): Blockchain;
export declare function isEthlikeBlockchain(blockchain: Blockchain): boolean;
export interface KeyPair {
    privateKey: Uint8Array;
    publicKey: Uint8Array;
}
export declare const getPlatFormCoinDecimalByBlockchain: (blockchain: Blockchain) => number;
