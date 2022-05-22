export interface Usuario{
    
    clave: number;
    correo: string;
    perfil: string;
    sexo: string;
    uid: string;
}

export interface Album{
    uid: string;
    foto: string;
    nombre: string;
    fecha: string;
    categoria: string;
}