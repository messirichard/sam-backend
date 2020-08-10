import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_code", ["code"], { unique: true })
@Index("fk_coupons_foruser", ["foruser"], {})
@Index("primary5", ["id"], { unique: true })
@Entity("coupons", { schema: "public" })
export class Coupons {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "name", length: 35 })
  name: string;

  @Column("character varying", { name: "code", length: 16 })
  code: string;

  @Column("character varying", { name: "tou", nullable: true, length: 1000 })
  tou: string | null;

  @Column("numeric", { name: "valvalue", precision: 17, scale: 2 })
  valvalue: string;

  @Column("smallint", { name: "valpercentage", default: () => "0" })
  valpercentage: number;

  @Column("numeric", {
    name: "mintotal",
    nullable: true,
    precision: 17,
    scale: 2,
  })
  mintotal: string | null;

  @Column("smallint", { name: "newuser", default: () => "1" })
  newuser: number;

  @Column("bigint", { name: "foruser", nullable: true })
  foruser: string | null;

  @Column("bigint", { name: "maxused", nullable: true })
  maxused: string | null;

  @Column("bigint", { name: "cntused", default: () => "0" })
  cntused: string;

  @Column("timestamp without time zone", { name: "issdate" })
  issdate: Date;

  @Column("timestamp without time zone", { name: "expdate" })
  expdate: Date;

  @Column("timestamp without time zone", { name: "usedate", nullable: true })
  usedate: Date | null;
}
