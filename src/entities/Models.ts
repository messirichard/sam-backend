import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_models_dev_id", ["developerId"], {})
@Index("uidx_models_name_devid", ["developerId", "name"], { unique: true })
@Index("primary24", ["id"], { unique: true })
@Index("ft_models_name", ["name"], {})
@Index("fk_models_widget_id", ["widgetId"], {})
@Entity("models", { schema: "public" })
export class Models {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "name", length: 16 })
  name: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 70,
  })
  description: string | null;

  @Column("bigint", { name: "widget_id", nullable: true })
  widgetId: string | null;

  @Column("character varying", {
    name: "default_title",
    nullable: true,
    length: 35,
  })
  defaultTitle: string | null;

  @Column("integer", { name: "default_width", nullable: true })
  defaultWidth: number | null;

  @Column("integer", { name: "default_height", nullable: true })
  defaultHeight: number | null;

  @Column("character varying", {
    name: "default_logo",
    nullable: true,
    length: 255,
  })
  defaultLogo: string | null;

  @Column("bigint", { name: "developer_id" })
  developerId: string;
}
