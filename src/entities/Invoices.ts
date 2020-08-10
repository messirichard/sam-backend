import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_invoices_coupon_id", ["couponId"], {})
@Index("fk_invoices_dev_id", ["developerId"], {})
@Index("primary19", ["id"], { unique: true })
@Index("ft_invoices_order_id", ["orderId"], {})
@Index("ft_invocies_title", ["title"], {})
@Entity("invoices", { schema: "public" })
export class Invoices {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "order_id", nullable: true, length: 64 })
  orderId: string | null;

  @Column("character varying", { name: "title", length: 35 })
  title: string;

  @Column("character varying", { name: "invto", length: 71 })
  invto: string;

  @Column("timestamp without time zone", { name: "issdate" })
  issdate: Date;

  @Column("timestamp without time zone", { name: "duedate" })
  duedate: Date;

  @Column("timestamp without time zone", { name: "paddate", nullable: true })
  paddate: Date | null;

  @Column("character varying", { name: "status", nullable: true, length: 16 })
  status: string | null;

  @Column("bigint", { name: "coupon_id", nullable: true })
  couponId: string | null;

  @Column("numeric", {
    name: "coupon_value",
    nullable: true,
    precision: 17,
    scale: 2,
  })
  couponValue: string | null;

  @Column("numeric", { name: "tax", precision: 17, scale: 2 })
  tax: string;

  @Column("numeric", { name: "total", precision: 17, scale: 2 })
  total: string;

  @Column("bigint", { name: "developer_id" })
  developerId: string;
}
