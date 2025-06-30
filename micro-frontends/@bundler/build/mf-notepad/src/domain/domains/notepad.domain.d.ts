import { NotepadDomainContract } from '../contracts';
import { TextFormats } from '../models';
export declare class NotepadDomain implements NotepadDomainContract {
    private fileManagerDomain;
    text: string;
    readonly textFormats: Array<TextFormats>;
    constructor();
    openFile(): Promise<void>;
    setText(text: string): void;
}
export declare const notepadDomain: NotepadDomain;
