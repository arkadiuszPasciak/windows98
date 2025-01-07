import type { FileManagerDomainContract } from "../contracts";
import type { EFileTextTypes } from "../models";
export declare class FileManagerDomain implements FileManagerDomainContract {
    openFile(): Promise<string>;
    saveFile(content: string, filename: string, type: EFileTextTypes): Promise<void>;
}
