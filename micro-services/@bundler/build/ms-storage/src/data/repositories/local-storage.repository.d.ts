import type { Maybe } from "@windows98/toolkit";
import type { StorageRepositoryStrategyContract } from "../../domain/contracts";
export declare class LocalStorageRepository<StorageKeys> implements StorageRepositoryStrategyContract<StorageKeys> {
    getItem<Key extends keyof StorageKeys>(key: Key): Maybe<StorageKeys[Key]>;
    setItem<Key extends keyof StorageKeys>(key: Key, value: StorageKeys[Key]): void;
    removeItem<Key extends keyof StorageKeys>(key: Key): void;
    clear(): void;
}
