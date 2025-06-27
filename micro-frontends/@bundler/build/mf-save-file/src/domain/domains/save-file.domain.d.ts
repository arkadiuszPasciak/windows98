import { Maybe } from '@windows98/toolkit';
import { SaveFileDomainContract } from '../contracts';
export declare class SaveFileDomain<FileTypes extends string> implements SaveFileDomainContract<FileTypes> {
    private fileManagerDomain;
    content: Maybe<string>;
    fileName: Maybe<string>;
    fileType: Maybe<FileTypes>;
    constructor();
    saveFile(): Promise<void>;
    setContent(content: string): void;
    setFileName(fileName: string): void;
    setFileType(fileType: FileTypes): void;
}
export declare const saveFileDomain: SaveFileDomain<string>;
