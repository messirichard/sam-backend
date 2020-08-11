import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_dashboard_customer_id", ["customerId"], {})
@Index("primary8", ["id"], { unique: true })
@Entity("customers_dashboards", { schema: "public" })
export class CustomersDashboards {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "name", length: 35 })
  name: string;

  @Column("character varying", { name: "data", length: 10000 })
  data: string;

  @Column("bigint", { name: "customer_id" })
  customerId: string;
}
