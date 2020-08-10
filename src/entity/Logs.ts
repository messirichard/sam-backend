import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("logs_device_node_id", ["deviceNodeId"], {})
@Index("dt", ["dt"], {})
@Index("primary22", ["id"], { unique: true })
@Entity("logs", { schema: "public" })
export class Logs {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("timestamp without time zone", { name: "dt" })
  dt: Date;

  @Column("character varying", { name: "com", length: 8 })
  com: string;

  @Column("text", { name: "raw_value" })
  rawValue: string;

  @Column("bigint", { name: "bytes" })
  bytes: string;

  @Column("bigint", { name: "device_node_id" })
  deviceNodeId: string;
}
