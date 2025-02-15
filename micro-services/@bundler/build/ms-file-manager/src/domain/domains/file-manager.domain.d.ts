import type { FileManagerDomainContract } from "../contracts";
export declare class FileManagerDomain implements FileManagerDomainContract {
    openFile(): Promise<string>;
    saveFile<FileType extends string>(content: string, filename: string, type: FileType): Promise<void>;
}
