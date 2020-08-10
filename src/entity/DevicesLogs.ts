import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("devices_logs_device_id", ["deviceId"], {})
@Index("primary17", ["id"], { unique: true })
@Entity("devices_logs", { schema: "public" })
export class DevicesLogs {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("timestamp without time zone", { name: "logdate" })
  logdate: Date;

  @Column("bytea", { name: "fromip" })
  fromip: Buffer;

  @Column("character varying", { name: "activity", length: 35 })
  activity: string;

  @Column("character varying", { name: "agent", length: 15 })
  agent: string;

  @Column("bigint", { name: "device_id" })
  deviceId: string;
}
