import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("primary21", ["id"], { unique: true })
@Index("fk_invoices_payment_inv_id", ["invoiceId"], {})
@Entity("invoices_payment", { schema: "public" })
export class InvoicesPayment {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "name", length: 35 })
  name: string;

  @Column("character varying", { name: "detail", length: 128 })
  detail: string;

  @Column("timestamp without time zone", { name: "paddate" })
  paddate: Date;

  @Column("character varying", { name: "ref_id", length: 64 })
  refId: string;

  @Column("bigint", { name: "invoice_id" })
  invoiceId: string;
}
