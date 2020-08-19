import {Column, Entity , PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Api {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public ability: string;

  @Column()
  public api_token: string;
}

export default Api;