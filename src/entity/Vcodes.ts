import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("code", ["code"], {})
@Index("vcodes_custid", ["customerId"], {})
@Index("primary32", ["id"], { unique: true })
@Entity("vcodes", { schema: "public" })
export class Vcodes {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "code", length: 6 })
  code: string;

  @Column("character varying", { name: "usefor", length: 16 })
  usefor: string;

  @Column("character varying", { name: "data", nullable: true, length: 255 })
  data: string | null;

  @Column("timestamp without time zone", { name: "issdate" })
  issdate: Date;

  @Column("timestamp without time zone", { name: "expdate" })
  expdate: Date;

  @Column("timestamp without time zone", { name: "usedate", nullable: true })
  usedate: Date | null;

  @Column("bytea", { name: "fromip", nullable: true })
  fromip: Buffer | null;

  @Column("smallint", { name: "public", default: () => "0" })
  public: number;

  @Column("bigint", { name: "customer_id" })
  customerId: string;
}
