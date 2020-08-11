import { Column, Entity, Index } from "typeorm";

@Index("primary27", ["countrycode"], { unique: true })
@Entity("phone", { schema: "public" })
export class Phone {
  @Column("character", { primary: true, name: "countrycode", length: 3 })
  countrycode: string;

  @Column("character varying", {
    name: "callingcode",
    nullable: true,
    length: 8,
  })
  callingcode: string | null;
}
