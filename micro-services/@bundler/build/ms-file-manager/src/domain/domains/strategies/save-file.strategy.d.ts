import { SaveFileStrategyContract } from '../../contracts';
export declare class SaveFileStrategy implements SaveFileStrategyContract {
    save<FileType extends string>(content: string, filename: string, type: FileType): Promise<void>;
}
