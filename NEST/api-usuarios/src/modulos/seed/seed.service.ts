import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
    loadData() {
      console.log('Cargando datos de prueba...');
      return { 
            message: 'Datos de prueba cargados',
            // data: seedClientes
       };
    }
}
