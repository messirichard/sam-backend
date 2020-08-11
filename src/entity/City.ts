import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("primary", ["id"], { unique: true })
@Entity("city", { schema: "public" })
export class City {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character", { name: "name", length: 35 })
  name: string;

  @Column("character", { name: "countrycode", length: 3 })
  countrycode: string;

  @Column("character", { name: "district", length: 20 })
  district: string;

  @Column("integer", { name: "population", default: () => "0" })
  population: number;
}
