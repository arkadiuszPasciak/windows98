import type { Maybe } from "@windows98/toolkit";
import type { StorageDomainContract, StorageRepositoryStrategyContract } from "../contracts";
export declare class StorageDomain<StorageKeys> implements StorageDomainContract<StorageKeys> {
    private storageRepository;
    constructor(storageRepository: StorageRepositoryStrategyContract<StorageKeys>);
    set<Key extends keyof StorageKeys>(key: Key, value: StorageKeys[Key]): void;
    get<Key extends keyof StorageKeys>(key: Key): Maybe<StorageKeys[Key]>;
    exists<Key extends keyof StorageKeys>(key: Key): boolean;
    remove<Key extends keyof StorageKeys>(key: Key): void;
}
