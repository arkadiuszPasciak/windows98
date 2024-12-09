import type { Maybe } from "@windows98/toolkit";
export interface StorageRepositoryStrategyContract<StorageKeys> {
    getItem<Key extends keyof StorageKeys>(key: Key): Maybe<StorageKeys[Key]>;
    setItem<Key extends keyof StorageKeys>(key: Key, value: StorageKeys[Key]): void;
    removeItem<Key extends keyof StorageKeys>(key: Key): void;
    clear(): void;
}
