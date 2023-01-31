export interface GetAddressResponse {
    accounts: Accounts[];
}
interface Accounts {
    address: string;
    network: string;
}
export {};
