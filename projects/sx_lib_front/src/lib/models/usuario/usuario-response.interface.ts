import { Usuario } from "./usuario.interface";

export interface UsuarioResponse {
    data: Usuario;
    errors: any;
    meta: any;
}