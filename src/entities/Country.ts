import { Column, Entity, Index } from "typeorm";

@Index("primary2", ["code"], { unique: true })
@Entity("country", { schema: "public" })
export class Country {
  @Column("character", { primary: true, name: "code", length: 3 })
  code: string;

  @Column("character", { name: "name", length: 52 })
  name: string;

  @Column("character varying", {
    name: "continent",
    length: 255,
    default: () => "'Asia'",
  })
  continent: string;

  @Column("character", { name: "region", length: 26 })
  region: string;

  @Column("real", { name: "surfacearea", precision: 24, default: () => "0.00" })
  surfacearea: number;

  @Column("smallint", { name: "indepyear", nullable: true })
  indepyear: number | null;

  @Column("integer", { name: "population", default: () => "0" })
  population: number;

  @Column("real", { name: "lifeexpectancy", nullable: true, precision: 24 })
  lifeexpectancy: number | null;

  @Column("real", { name: "gnp", nullable: true, precision: 24 })
  gnp: number | null;

  @Column("real", { name: "gnpold", nullable: true, precision: 24 })
  gnpold: number | null;

  @Column("character", { name: "localname", length: 45 })
  localname: string;

  @Column("character", { name: "governmentform", length: 45 })
  governmentform: string;

  @Column("character", { name: "headofstate", nullable: true, length: 60 })
  headofstate: string | null;

  @Column("integer", { name: "capital", nullable: true })
  capital: number | null;

  @Column("character", { name: "code2", length: 2 })
  code2: string;
}
