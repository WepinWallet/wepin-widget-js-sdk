export interface SetAccountsResponse {
    accounts: Accounts[];
}
interface Accounts {
    address: string;
    network: string;
}
export {};
