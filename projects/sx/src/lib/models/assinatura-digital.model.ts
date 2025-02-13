
export interface AssinaturaDigitalModel {
    TipoDocumento: number;
    CodigoDocumento: string;
    CdHospital: number;
    SenhaCertificado: string;
    ConteudoBase64: string;
    AssinaturaComImagem: boolean;
    DadosAssinaturaImagem?: {
        Texto: string;
        ImagemJpgBase64: string;
        PosicaoX: number;
        PosicaoY: number;
        AlturaTotal: number;
        LarguraTotal: number;
        Pagina: number;
    }
}
