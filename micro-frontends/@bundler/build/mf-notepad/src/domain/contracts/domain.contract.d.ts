import { TextFormats } from '../models';
export interface NotepadDomainContract {
    text: string;
    readonly textFormats: Array<TextFormats>;
    openFile(): Promise<void>;
    setText(text: string): void;
}
