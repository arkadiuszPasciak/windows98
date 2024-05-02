import type { DatabaseRepositoryContract } from "../../domain/contracts/repository.contract";
export declare class DatabaseRepository implements DatabaseRepositoryContract {
    private databaseName;
    private storeName;
    private database;
    constructor(databaseName: string, storeName: string);
    open(): Promise<void>;
    private getStore;
    add<T>(item: T): Promise<void>;
    get<T>(key: IDBValidKey): Promise<IDBRequest<T>>;
    update<T>(key: IDBValidKey, item: T): Promise<void>;
    delete(key: IDBValidKey): Promise<void>;
}
