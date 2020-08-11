import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("primary1", ["id"], { unique: true })
@Entity("class", { schema: "public" })
export class Class {
  @PrimaryGeneratedColumn({ type: "smallint", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 35 })
  name: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 70,
  })
  description: string | null;

  @Column("smallint", { name: "public", default: () => "1" })
  public: number;

  @Column("smallint", { name: "userbase", default: () => "0" })
  userbase: number;

  @Column("smallint", { name: "email_service", default: () => "0" })
  emailService: number;

  @Column("bigint", { name: "api_apps", default: () => "0" })
  apiApps: string;

  @Column("bigint", { name: "total_devices", default: () => "0" })
  totalDevices: string;

  @Column("bigint", { name: "total_users", default: () => "0" })
  totalUsers: string;

  @Column("bigint", { name: "total_bytes", default: () => "0" })
  totalBytes: string;

  @Column("numeric", {
    name: "price",
    precision: 17,
    scale: 2,
    default: () => "0.00",
  })
  price: string;

  @Column("numeric", { name: "disc", nullable: true, precision: 17, scale: 2 })
  disc: string | null;

  @Column("numeric", {
    name: "price_year",
    precision: 17,
    scale: 2,
    default: () => "0.00",
  })
  priceYear: string;

  @Column("numeric", {
    name: "disc_year",
    nullable: true,
    precision: 17,
    scale: 2,
  })
  discYear: string | null;

  @Column("numeric", {
    name: "price_add_device",
    precision: 17,
    scale: 2,
    default: () => "0.00",
  })
  priceAddDevice: string;

  @Column("numeric", {
    name: "price_add_user",
    precision: 17,
    scale: 2,
    default: () => "0.00",
  })
  priceAddUser: string;

  @Column("numeric", {
    name: "price_add_bytes",
    precision: 17,
    scale: 2,
    default: () => "0.00",
  })
  priceAddBytes: string;

  @Column("character varying", {
    name: "channels",
    nullable: true,
    length: 1000,
  })
  channels: string | null;
}
