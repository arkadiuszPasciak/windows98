import { EFileTextTypes } from '../models';
export interface FileManagerDomainContract {
    openFile(): Promise<string>;
    saveFile(content: string, filename: string, type: EFileTextTypes): Promise<void>;
}
