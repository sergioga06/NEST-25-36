import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

// Definir la interfaz para un usuario
@Injectable()
export class UsuariosService {
    private db: Low<any>;
    constructor() {
        const adaptador = new JSONFile('src/db/db.json');
        this.db = new Low(adaptador, { users: [] });
        
    }
    async findAll() {
        await this.db.read(); // aqui el codigo se bloquea
        return this.db.data.users;
    }

    async new(){
        await this.db.read(); // Carga el fichero JSON
        const user = { id: 8, name: 'Fran', email: 'fran@example.com' }; // Nuevo usuario a añadir
        this.db.data.users.push(user); // Añade el fichero JSON pero carga en la RAM
        this.db.write();// Escribe en el fichero JSON el nuevo usuario para poder cargarlo
        console.log(this.db.data.users); // Muestra en la terminal los usuarios
        return {
            msg :'Usuario creado',
            data: this.db.data.users
        };
    }
}

