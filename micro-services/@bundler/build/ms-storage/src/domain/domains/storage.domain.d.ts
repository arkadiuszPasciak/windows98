import type { StorageDomainContract } from "../contracts";
export declare class StorageDomain<Key extends string, Value extends string> implements StorageDomainContract<Key, Value> {
    private readonly storageRepository;
    constructor();
    addItem(key: Key, value: Value): void;
    getItem(key: Key): string | null;
    isItemExist(key: Key): boolean;
    updateItem(key: Key, value: Value): void;
    removeItem(key: Key): void;
}
