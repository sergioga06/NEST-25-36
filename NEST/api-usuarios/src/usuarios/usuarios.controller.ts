import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import * as IUsuarios from './interfaces/IUsuarios';
import { CreateUserDto } from './dto/new-user.dto';

@Controller('usuarios')
export class UsuariosController {
  // inyectar el servicio de usuariosService en UsuariosController
  constructor(private readonly usuariosService: UsuariosService) {}
  @Get('all')
  getAll() {
    return this.usuariosService.findAll();
  }
  @Post('new')
  add(@Body() usuarioDTO: CreateUserDto) {
    console.log('Usuario recibido', usuarioDTO);
    // Validar edad
    ;// supongo que es mayor de 18
   // extraer manualmente los datos del body(request) --> caso express
   // Debemos de validarlo --> email este ok
    // usuario = peticion.body;
     // extraer los datos del body (POST) o parametros (GET) de mi request
    //  console.log(usuario.email, usuario.nombre);
    // //  Mi controlador debe de validar los datos
    // if (typeof usuario.edad !== 'number') {
    //   esNumber = false;
    //   throw new BadRequestException({
    //     success: false,
    //     msg: 'La edad debe ser un numero entero',
    //   })
    // }
    // if (usuario.edad < 18) {
    //   esMayor18 = false;
    //   throw new BadRequestException({
    //     success: false,
    //     msg: 'El usuario debe ser mayor de edad',
    //   })
    // }
    // // Validar email
    // if (!usuario.email || usuario.email.length < 6 || !usuario.email.includes('@')) {
    //   throw new BadRequestException({
    //     success: false,
    //     msg: 'El email no es valido',
    //   })
    // }
    // console.log('Usuario validado', usuario);
    // // return this.usuariosService.new();
  }
  @Get('delete')
  getEliminar(){
    return 'Eliminar un usuario';
  }
}
