import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("devices_adminid", ["adminId"], {})
@Index("idx_born1", ["bornDate"], {})
@Index("search", ["description", "model", "name"], {})
@Index("devid", ["developerId"], {})
@Index("idstatusdev", ["developerId", "id", "status"], {})
@Index("primary9", ["id"], { unique: true })
@Index("idx_model", ["model"], {})
@Index("sn", ["sn"], { unique: true })
@Index("idx_state", ["state"], {})
@Entity("devices", { schema: "public" })
export class Devices {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "sn", length: 32 })
  sn: string;

  @Column("character varying", { name: "mac", nullable: true, length: 17 })
  mac: string | null;

  @Column("character varying", { name: "model", nullable: true, length: 16 })
  model: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 35 })
  name: string | null;

  @Column("character varying", { name: "sammy", nullable: true, length: 16 })
  sammy: string | null;

  @Column("character varying", { name: "localip", nullable: true, length: 40 })
  localip: string | null;

  @Column("character varying", { name: "fw_name", nullable: true, length: 32 })
  fwName: string | null;

  @Column("character varying", {
    name: "fw_version",
    nullable: true,
    length: 32,
  })
  fwVersion: string | null;

  @Column("smallint", { name: "restart", default: () => "0" })
  restart: number;

  @Column("smallint", { name: "reset", default: () => "0" })
  reset: number;

  @Column("character varying", { name: "stats", nullable: true, length: 1000 })
  stats: string | null;

  @Column("character varying", { name: "state", nullable: true, length: 16 })
  state: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 70,
  })
  description: string | null;

  @Column("numeric", {
    name: "map_lng",
    nullable: true,
    precision: 11,
    scale: 8,
  })
  mapLng: string | null;

  @Column("numeric", {
    name: "map_lat",
    nullable: true,
    precision: 11,
    scale: 8,
  })
  mapLat: string | null;

  @Column("character varying", { name: "logo", nullable: true, length: 255 })
  logo: string | null;

  @Column("character varying", { name: "nodes", nullable: true, length: 5000 })
  nodes: string | null;

  @Column("character varying", {
    name: "options",
    nullable: true,
    length: 2000,
  })
  options: string | null;

  @Column("timestamp without time zone", { name: "born_date" })
  bornDate: Date;

  @Column("bigint", { name: "admin_id", nullable: true })
  adminId: string | null;

  @Column("bigint", { name: "developer_id", nullable: true })
  developerId: string | null;

  @Column("smallint", { name: "server_time", default: () => "0" })
  serverTime: number;

  @Column("smallint", { name: "logme", default: () => "1" })
  logme: number;

  @Column("bigint", { name: "loglimit", default: () => "0" })
  loglimit: string;

  @Column("bigint", { name: "total_bytes", default: () => "0" })
  totalBytes: string;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;
}
