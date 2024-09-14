import type { StorageRepositoryContract } from "../../domain/contracts";
export declare class StorageRepository<Key extends string, Value extends string> implements StorageRepositoryContract<Key, Value> {
    addItem(key: Key, value: Value): void;
    getItem(key: Key): string | null;
    isItemExist(key: Key): boolean;
    removeItem(key: Key): void;
    clearAll(): void;
}
