
//  definir la estructura de datos de un objeto usuario
// Interfaces --> a las estrucutras de datos internas o esquemas de datos
// types --> para definir
export interface  IUser {
    id: number;
    nombre: string;
    email: string;
    edad: number;
}

type TUser = {
    id: number;
    nombre: string;
    email: string;
}