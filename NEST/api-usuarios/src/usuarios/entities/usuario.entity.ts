
// ORM --> Mapeo Objeto - Relacional
// Create table usuario
import { AfterInsert, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
// Logica de negocio de la entidad Usuario
export class Address{
    @Column({nullable: true}) calle: string;
    @Column({nullable: true}) pais: string;
    @Column({nullable: true}) numero: number;
}

@Entity('usuario')
export class Usuario {
    
    @PrimaryColumn()
    nif: string;

    @Column('uuid')
    id: string;

    @Column({ nullable:true,  length: 30})
    name: string;

    @Column('int', {nullable:true, default: 18})
    edad: number;
    
    @Column({nullable: false, unique: true})
    email: string;
    
    @Column()
    rol: string;

    @Column(() => Address, { prefix: ''}) address: Address;
    // **** MECANISMOS DE SEGURIDAD ****/
    // monitorizar y auditarlos resgistros de usuarios y tablas de accesos --> login/logaut/change profile ...
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    // deleteAT: Date; 

    @BeforeInsert()
    checkNif() {
        console.log('Antes de insertar el usuario en la BD');
        if (!this.nif.includes('-')) {
            const letra = this.nif.slice(-1).toUpperCase();
            const numeros = this.nif.slice(0, -1);
            this.nif = `${numeros}-${letra}`;
        }
    }

    // @Before/After-Insert/remove/update
    @BeforeInsert() // Evento disparador
    checkName() { //Metodo manejador del evento
        console.log('Antes de insertar el usuario en la BD');
        if (!this.name){
            this.name = 'invitado';
        }

        this.name = this.name
                    .replaceAll(' ', '_')
                    .toUpperCase();  
    }
}


