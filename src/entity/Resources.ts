import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("resources_deviceid", ["deviceId"], {})
@Index("primary28", ["id"], { unique: true })
@Index("resources_reportid", ["reportId"], {})
@Entity("resources", { schema: "public" })
export class Resources {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "device_id" })
  deviceId: string;

  @Column("character varying", { name: "name", nullable: true, length: 35 })
  name: string | null;

  @Column("character varying", { name: "param", length: 255 })
  param: string;

  @Column("smallint", { name: "opmode", default: () => "0" })
  opmode: number;

  @Column("numeric", {
    name: "opvalue",
    precision: 15,
    scale: 5,
    default: () => "0.00000",
  })
  opvalue: string;

  @Column("character varying", {
    name: "options",
    nullable: true,
    length: 2000,
  })
  options: string | null;

  @Column("bigint", { name: "report_id" })
  reportId: string;
}
