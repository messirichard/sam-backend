import { Column, Entity, Index } from "typeorm";

@Index("primary3", ["countrycode", "language"], { unique: true })
@Entity("countrylanguage", { schema: "public" })
export class Countrylanguage {
  @Column("character", { primary: true, name: "countrycode", length: 3 })
  countrycode: string;

  @Column("character", { primary: true, name: "language", length: 30 })
  language: string;

  @Column("character varying", {
    name: "isofficial",
    length: 255,
    default: () => "'F'",
  })
  isofficial: string;

  @Column("real", { name: "percentage", precision: 24, default: () => "0.0" })
  percentage: number;
}
