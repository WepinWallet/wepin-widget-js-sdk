import { BaseProvider } from '../BaseProvider';
import { SupportedChains } from '../types/Networks';
import { Wepin } from '../..';
export default class InpageProvider extends BaseProvider {
    constructor({ network, wepin, }: {
        network: Partial<SupportedChains>;
        wepin: Wepin;
    });
    static generate(params: any): InpageProvider;
}
