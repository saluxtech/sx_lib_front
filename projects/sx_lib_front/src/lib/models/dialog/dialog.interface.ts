export interface IDialog {
    title: string;
    message: string;
    buttons: {
        cancel: string;
        confirm: string;
    }
}