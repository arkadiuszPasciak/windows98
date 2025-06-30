export declare const useSaveFile: () => {
    closeModal: () => void;
    fileTypes: import('../../../../domain/models').TextFormats[];
    openModal: () => void;
    modalState: boolean;
    text: string;
    translations: {
        button: string;
    };
};
