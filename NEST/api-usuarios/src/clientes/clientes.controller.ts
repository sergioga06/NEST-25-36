import { Body, Controller, Post } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/cliente.dto';

@Controller('clientes')
export class ClientesController {
  //controlador --> servicio (inyectar servicio)
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  add (@Body() clienteDTO: CreateClienteDto) {
    
  }
}