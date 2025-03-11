export interface CardTableModel {
    header: string;
    type: 'text' | 'badges' | 'title' | 'button';
    content: string;
    col?: number;
    pipe?: 'currency' | 'date';
}