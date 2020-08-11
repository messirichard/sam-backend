import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_born", ["bornDate"], {})
@Index("iddev", ["developerId", "id"], {})
@Index("email_devid", ["developerId", "email"], { unique: true })
@Index("dev_id", ["developerId"], {})
@Index("ft_idx_search", ["email", "fname", "lname", "orgEmail", "orgName"], {})
@Index("primary7", ["id"], { unique: true })
@Index("idx_complete", ["profileComplete"], {})
@Entity("customers", { schema: "public" })
export class Customers {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "email", length: 255 })
  email: string;

  @Column("character varying", { name: "fname", length: 35 })
  fname: string;

  @Column("character varying", { name: "lname", nullable: true, length: 35 })
  lname: string | null;

  @Column("character varying", { name: "phone", nullable: true, length: 20 })
  phone: string | null;

  @Column("character", { name: "pwd_hash", length: 255 })
  pwdHash: string;

  @Column("timestamp without time zone", {
    name: "pwd_lastchg",
    nullable: true,
  })
  pwdLastchg: Date | null;

  @Column("character varying", { name: "avatar", nullable: true, length: 255 })
  avatar: string | null;

  @Column("character varying", { name: "address", nullable: true, length: 15 })
  address: string | null;

  @Column("character varying", { name: "agent", nullable: true, length: 50 })
  agent: string | null;

  @Column("character varying", { name: "org_name", nullable: true, length: 70 })
  orgName: string | null;

  @Column("character varying", {
    name: "org_addr1",
    nullable: true,
    length: 70,
  })
  orgAddr1: string | null;

  @Column("character varying", {
    name: "org_addr2",
    nullable: true,
    length: 70,
  })
  orgAddr2: string | null;

  @Column("character varying", { name: "org_city", nullable: true, length: 35 })
  orgCity: string | null;

  @Column("character varying", {
    name: "org_province",
    nullable: true,
    length: 20,
  })
  orgProvince: string | null;

  @Column("character varying", {
    name: "org_country",
    nullable: true,
    length: 52,
  })
  orgCountry: string | null;

  @Column("character varying", { name: "org_zip", nullable: true, length: 8 })
  orgZip: string | null;

  @Column("character varying", { name: "org_web", nullable: true, length: 70 })
  orgWeb: string | null;

  @Column("character varying", {
    name: "org_email",
    nullable: true,
    length: 255,
  })
  orgEmail: string | null;

  @Column("character varying", {
    name: "org_phone",
    nullable: true,
    length: 20,
  })
  orgPhone: string | null;

  @Column("timestamp without time zone", { name: "born_date" })
  bornDate: Date;

  @Column("bigint", { name: "sales_id", default: () => "0" })
  salesId: string;

  @Column("smallint", { name: "profile_complete", default: () => "0" })
  profileComplete: number;

  @Column("smallint", { name: "status", default: () => "0" })
  status: number;

  @Column("character varying", { name: "note", nullable: true, length: 2048 })
  note: string | null;

  @Column("bigint", {
    name: "developer_id",
    nullable: true,
    default: () => "1",
  })
  developerId: string | null;
}
