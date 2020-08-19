import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_dev_id", ["developerId"], {})
@Index("primary15", ["id"], { unique: true })
@Index("ft_idx_title_tags", ["tags", "title"], {})
@Entity("developers_msgs", { schema: "public" })
export class DevelopersMsgs {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("timestamp without time zone", { name: "born_date" })
  bornDate: Date;

  @Column("character varying", { name: "title", length: 255 })
  title: string;

  @Column("character varying", { name: "detail", nullable: true, length: 1000 })
  detail: string | null;

  @Column("smallint", { name: "sticky", default: () => "0" })
  sticky: number;

  @Column("smallint", { name: "isread", default: () => "0" })
  isread: number;

  @Column("character varying", { name: "tags", nullable: true, length: 255 })
  tags: string | null;

  @Column("character varying", {
    name: "type",
    length: 8,
    default: () => "'info'",
  })
  type: string;

  @Column("bigint", { name: "developer_id" })
  developerId: string;
}
