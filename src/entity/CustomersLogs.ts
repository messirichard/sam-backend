import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("customers_logs_customer_id", ["customerId"], {})
@Index("primary11", ["id"], { unique: true })
@Entity("customers_logs", { schema: "public" })
export class CustomersLogs {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("timestamp without time zone", { name: "logdate" })
  logdate: Date;

  @Column("bytea", { name: "fromip" })
  fromip: Buffer;

  @Column("character varying", { name: "activity", length: 35 })
  activity: string;

  @Column("character varying", { name: "agent", length: 15 })
  agent: string;

  @Column("bigint", { name: "customer_id" })
  customerId: string;
}
