import type { EFileTextTypes } from "../models";
export interface FileManagerDomainContract {
    openFile(): Promise<string>;
    saveTextFile(content: string, filename: string, type: EFileTextTypes): Promise<void>;
}
