import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("primary20", ["id"], { unique: true })
@Index("fk_invoices_items_inv_id", ["invoiceId"], {})
@Entity("invoices_items", { schema: "public" })
export class InvoicesItems {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "sku" })
  sku: string;

  @Column("character varying", { name: "name", length: 35 })
  name: string;

  @Column("numeric", { name: "price", precision: 17, scale: 2 })
  price: string;

  @Column("bigint", { name: "qty" })
  qty: string;

  @Column("numeric", { name: "disc", nullable: true, precision: 17, scale: 2 })
  disc: string | null;

  @Column("numeric", { name: "total", precision: 17, scale: 2 })
  total: string;

  @Column("bigint", { name: "invoice_id" })
  invoiceId: string;
}
