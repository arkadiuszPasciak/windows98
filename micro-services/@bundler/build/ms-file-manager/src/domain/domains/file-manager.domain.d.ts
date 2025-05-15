import { FileManagerDomainContract } from '../contracts';
export declare class FileManagerDomain implements FileManagerDomainContract {
    private saveFileStrategy;
    constructor();
    openFile(): Promise<string>;
    saveFile<FileType extends string>(content: string, filename: string, type: FileType): Promise<void>;
}
