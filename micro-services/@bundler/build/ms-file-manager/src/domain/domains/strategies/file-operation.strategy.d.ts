import type { FileOperationStrategyContract } from "../../contracts";
export declare class FileOperationStrategy implements FileOperationStrategyContract {
    saveFile<FileType extends string>(content: string, filename: string, type: FileType): Promise<void>;
}
