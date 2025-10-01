import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsIn, IsInt, IsNumber, IsOptional, IsString, IsUUID, Matches, Max, MaxLength, Min, MinLength } from "class-validator";


const roles: String[] = ['administrador', 'usuario', 'invitado'];
export class CreateUserDto {
 
    @IsNumber() // funcion externa que valida que es un numero
    @IsUUID() // ES UN UDENTIFICADOR UNICO UNIVERSAL
    id: number;
     
    @IsOptional() // funcion externa que valida que es opcional
    @MinLength(5, {message: 'El name debe tener al menos 5 caracteres'}) // funcion externa que valida que tiene una longitud minima
    @MaxLength(8, {message: 'El name debe tener como maximo 8 caracteres'}) // funcion externa que valida que tiene una longitud maxima
    @IsString() // funcion externa que valida que es un string
    nombre: string;

    @IsString() // funcion externa que valida que es un string
    email: string;

    @IsArray() // funcion externa que valida que es un array
    @ArrayMinSize(2, {message: 'El usuario debe tener al menos un telefono'}) // funcion externa que valida que tiene una longitud minima
    @ArrayMaxSize(3, {message: 'El usuario debe tener como maximo 3 telefonos'}) // funcion externa que valida que tiene una longitud maxima
    telefonos: string;

       // edad esta comprendida entre 19 y 58
    @Min(18, {message: 'La edad minima es 18'}) // funcion externa que valida que es un numero minimo
    @Max(58, {message: 'La edad maxima es 58'}) // funcion externa que valida que es un numero maximo
    @IsInt() // funcion externa que valida que es un numero  
    edad: number;

    @IsString() // funcion externa que valida que es un string
    @Matches(/^[0-9]{8}[A-Z]$/, {message: 'El nif debe tener 8 numeros y una letra mayuscula'}) // funcion externa que valida que cumple con una expresion regular
    nif: string;

    @IsIn(roles, {message: `El rol debe ser uno de los siguientes:  ${roles}`})
    rol: string;

    @IsBoolean() // funcion externa que valida que es un booleano
    esDelMadrid: boolean;

    
    direcciones: AdressDTO[];

}   