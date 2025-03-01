import type { FileManagerDomainContract } from "../contracts";
import type { EFileTextTypes } from "../models";
export declare class FileManagerDomain implements FileManagerDomainContract {
    private fileOperationStrategy;
    constructor();
    openFile(): Promise<string>;
    saveTextFile(content: string, filename: string, type: EFileTextTypes): Promise<void>;
}
