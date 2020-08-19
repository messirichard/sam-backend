import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("reports_admin_id", ["adminId"], {})
@Index("primary12", ["id"], { unique: true })
@Index("title", ["title"], {})
@Entity("reports", { schema: "public" })
export class Reports {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", {
    name: "title",
    length: 35,
    default: () => "'My Analytic'",
  })
  title: string;

  @Column("character varying", { name: "model", length: 35 })
  model: string;

  @Column("character varying", { name: "tags", nullable: true, length: 1000 })
  tags: string | null;

  @Column("character varying", {
    name: "options",
    nullable: true,
    length: 2000,
  })
  options: string | null;

  @Column("bigint", { name: "admin_id" })
  adminId: string;
}
