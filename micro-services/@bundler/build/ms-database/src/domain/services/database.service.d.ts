import { DatabaseRepository } from "../../data/repositories/database.repository";
import type { DatabaseServiceContract } from "../contracts/service.contract";
export default class DatabaseService implements DatabaseServiceContract {
    readonly databaseName: string;
    readonly storeName: string;
    readonly databaseRepository: DatabaseRepository;
    constructor(databaseName: string, storeName: string);
    open(): Promise<void>;
    add<T>(item: T): Promise<void>;
    get<T>(key: IDBValidKey): Promise<IDBRequest<T>>;
    update<T>(key: IDBValidKey, item: T): Promise<void>;
    delete(key: IDBValidKey): Promise<void>;
}
