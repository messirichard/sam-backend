import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_devlopers_tokens_id", ["developersTokensId"], {})
@Index("uq_id", ["id", "model"], { unique: true })
@Index("primary23", ["id"], { unique: true })
@Index("ft_widget_search", ["model", "name", "tags"], {})
@Index("id_widget", ["model"], { unique: true })
@Index("ft_widgets_name", ["name"], {})
@Index("ft_widget_tags", ["tags"], {})
@Entity("widgets", { schema: "public" })
export class Widgets {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "developers_tokens_id" })
  developersTokensId: string;

  @Column("character varying", { name: "model", nullable: true, length: 35 })
  model: string | null;

  @Column("character varying", { name: "name", length: 32 })
  name: string;

  @Column("character varying", { name: "tags", nullable: true, length: 1000 })
  tags: string | null;

  @Column("integer", { name: "min_width", default: () => "0" })
  minWidth: number;

  @Column("integer", { name: "max_width", default: () => "0" })
  maxWidth: number;

  @Column("integer", { name: "min_height", default: () => "0" })
  minHeight: number;

  @Column("integer", { name: "max_height", default: () => "0" })
  maxHeight: number;

  @Column("character varying", { name: "logo", nullable: true, length: 255 })
  logo: string | null;

  @Column("smallint", { name: "status", default: () => "0" })
  status: number;
}
