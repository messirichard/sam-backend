import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("primary25", ["id"], { unique: true })
@Index("uq_id_el", ["id", "idElement"], { unique: true })
@Index("fk_widgets_id", ["widgetId"], {})
@Entity("widgets_elements", { schema: "public" })
export class WidgetsElements {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "widget_id" })
  widgetId: string;

  @Column("character varying", { name: "id_element", length: 32 })
  idElement: string;

  @Column("character varying", { name: "name", length: 32 })
  name: string;

  @Column("smallint", { name: "settable", default: () => "0" })
  settable: number;

  @Column("smallint", { name: "retained", default: () => "0" })
  retained: number;

  @Column("smallint", { name: "params_max", default: () => "0" })
  paramsMax: number;

  @Column("character varying", {
    name: "params_datatype",
    nullable: true,
    length: 255,
  })
  paramsDatatype: string | null;
}
