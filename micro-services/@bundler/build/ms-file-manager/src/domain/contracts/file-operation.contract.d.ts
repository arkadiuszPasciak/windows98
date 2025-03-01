export interface FileOperationStrategyContract {
    saveFile<FileType extends string>(content: string, filename: string, type: FileType): Promise<void>;
}
