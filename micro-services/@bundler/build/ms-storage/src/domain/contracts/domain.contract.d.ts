export interface StorageDomainContract<Key, Value> {
    addItem(key: Key, value: Value): void;
    getItem(key: Key): string | null;
    isItemExist(key: Key): boolean;
    updateItem(key: Key, value: Value): void;
    removeItem(key: Key): void;
}
