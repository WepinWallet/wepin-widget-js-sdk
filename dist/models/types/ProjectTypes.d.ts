export interface IProject {
    id: string;
    network: {
        coinId: number;
        tokenIds: number[];
        nftContractIds: number[];
    }[];
    logoImage: string;
    color: string;
    contact: string;
    state: ProjectState;
    category: string;
    registerType: ProjectType;
    name: string;
    description: string;
    keyword: string[];
    createdTime: string;
}
export declare enum ProjectState {
    active = 1,
    inactive = 2
}
export declare enum ProjectType {
    useUser = 1,
    useAccount = 2
}
export declare enum ProjectPlatformReleaseType {
    development = 1,
    product = 2
}
export declare enum ProjectPlatformKind {
    web = 1,
    android = 2,
    ios = 3
}
