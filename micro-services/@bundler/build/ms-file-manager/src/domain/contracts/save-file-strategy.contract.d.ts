export interface SaveFileStrategyContract {
    save<FileType extends string>(content: string, filename: string, type: FileType): Promise<void>;
}
