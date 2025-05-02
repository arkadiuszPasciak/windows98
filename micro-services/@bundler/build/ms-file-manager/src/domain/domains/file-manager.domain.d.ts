import { FileManagerDomainContract } from '../contracts';
import { EFileTextTypes } from '../models';
export declare class FileManagerDomain implements FileManagerDomainContract {
    openFile(): Promise<string>;
    saveFile(content: string, filename: string, type: EFileTextTypes): Promise<void>;
}
