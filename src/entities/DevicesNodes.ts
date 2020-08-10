import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("devices_nodes_device_id", ["deviceId"], {})
@Index("primary18", ["id"], { unique: true })
@Index("id_raw_param", ["id", "rawParam"], {})
@Entity("devices_nodes", { schema: "public" })
export class DevicesNodes {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "raw_param", length: 255 })
  rawParam: string;

  @Column("bigint", { name: "device_id" })
  deviceId: string;
}
