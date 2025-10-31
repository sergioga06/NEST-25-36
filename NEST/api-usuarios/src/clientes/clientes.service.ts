import { Injectable } from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ICliente } from './interfaces/ICliente';
import { CreateClienteDto } from './dto/cliente.dto';


@Injectable()
export class ClientesService {
   
    constructor(
        @InjectRepository(Cliente) 
        private readonly clientesRepository: Repository<Cliente>
    ){
        // codigo contructor servicio
    }

    async create (createClienteDto: CreateClienteDto){ //cliente: DTO/Ifaz
        // transformar el objeto cliente DTO/Ifaz en una entidad cliente (Entity<Cliente)
        const cliente = this.clientesRepository.create(createClienteDto);
        await this.clientesRepository.save(cliente);
        return cliente;
    }
}