export interface SendTransactionRequest {
    appKey: string;
    txData: TxDataType;
}
export type TxDataType = {
    to: string;
    network: string;
    amount: number;
    contract?: string;
};
