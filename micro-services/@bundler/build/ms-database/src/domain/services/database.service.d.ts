import type { DatabaseServiceContract } from "../contracts/service.contract";
export default class DatabaseService implements DatabaseServiceContract {
    readonly databaseName: string;
    readonly storeName: string;
    private readonly databaseRepository;
    constructor(databaseName: string, storeName: string);
    open(): Promise<void>;
    add<T>(item: T): Promise<void>;
    get<T>(key: IDBValidKey): Promise<IDBRequest<T>>;
    update<T>(key: IDBValidKey, item: T): Promise<void>;
    delete(key: IDBValidKey): Promise<void>;
}
