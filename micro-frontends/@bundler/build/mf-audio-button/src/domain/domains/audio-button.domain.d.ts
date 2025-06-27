import { AudioButtonDomainContract } from '../contracts';
export declare class AudioButtonDomain implements AudioButtonDomainContract {
    isMuted: boolean;
    constructor();
    toggleSound(): Promise<void>;
}
export declare const audioButtonDomain: AudioButtonDomain;
