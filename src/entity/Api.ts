import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Api {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public ability: string;

}

export default Api;