import type { Maybe } from "@windows98/toolkit";
export interface StorageDomainContract<StorageKeys> {
    set<Key extends keyof StorageKeys>(key: Key, value: StorageKeys[Key]): void;
    get<Key extends keyof StorageKeys>(key: Key): Maybe<StorageKeys[Key]>;
    exists<Key extends keyof StorageKeys>(key: Key): boolean;
    remove<Key extends keyof StorageKeys>(key: Key): void;
}
