import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("dev_classid", ["classId"], {})
@Index("email_idx", ["ctcEmail"], { unique: true })
@Index("primary4", ["id"], { unique: true })
@Entity("developers", { schema: "public" })
export class Developers {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "ctc_email", length: 255 })
  ctcEmail: string;

  @Column("character varying", { name: "ctc_fname", length: 35 })
  ctcFname: string;

  @Column("character varying", {
    name: "ctc_lname",
    nullable: true,
    length: 35,
  })
  ctcLname: string | null;

  @Column("character varying", {
    name: "ctc_title",
    nullable: true,
    length: 35,
  })
  ctcTitle: string | null;

  @Column("character varying", {
    name: "ctc_phone",
    nullable: true,
    length: 20,
  })
  ctcPhone: string | null;

  @Column("character", { name: "ctc_pwd_hash", length: 255 })
  ctcPwdHash: string;

  @Column("character varying", { name: "name", nullable: true, length: 64 })
  name: string | null;

  @Column("character varying", { name: "addr1", nullable: true, length: 70 })
  addr1: string | null;

  @Column("character varying", { name: "addr2", nullable: true, length: 70 })
  addr2: string | null;

  @Column("character varying", { name: "city", nullable: true, length: 35 })
  city: string | null;

  @Column("character varying", { name: "province", nullable: true, length: 20 })
  province: string | null;

  @Column("character varying", { name: "country", nullable: true, length: 52 })
  country: string | null;

  @Column("character varying", { name: "zip", nullable: true, length: 8 })
  zip: string | null;

  @Column("character varying", { name: "web", nullable: true, length: 70 })
  web: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("character varying", { name: "phone", nullable: true, length: 20 })
  phone: string | null;

  @Column("character varying", { name: "avatar", nullable: true, length: 255 })
  avatar: string | null;

  @Column("character varying", { name: "address", nullable: true, length: 15 })
  address: string | null;

  @Column("character varying", { name: "agent", nullable: true, length: 50 })
  agent: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 64,
  })
  description: string | null;

  @Column("timestamp without time zone", { name: "born_date" })
  bornDate: Date;

  @Column("smallint", { name: "public", default: () => "1" })
  public: number;

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

  @Column("smallint", { name: "default_logme", default: () => "1" })
  defaultLogme: number;

  @Column("bigint", { name: "default_logkeep", default: () => "7" })
  defaultLogkeep: string;

  @Column("bigint", { name: "default_logs", default: () => "0" })
  defaultLogs: string;

  @Column("smallint", { name: "status", default: () => "0" })
  status: number;

  @Column("timestamp without time zone", { name: "exp_date", nullable: true })
  expDate: Date | null;

  @Column("smallint", { name: "rating", default: () => "1" })
  rating: number;

  @Column("smallint", { name: "oem_enable", default: () => "0" })
  oemEnable: number;

  @Column("character varying", {
    name: "oem_domain",
    nullable: true,
    length: 255,
  })
  oemDomain: string | null;

  @Column("character varying", {
    name: "oem_email_noreply",
    nullable: true,
    length: 255,
  })
  oemEmailNoreply: string | null;

  @Column("character varying", {
    name: "oem_email_support",
    nullable: true,
    length: 255,
  })
  oemEmailSupport: string | null;

  @Column("character varying", {
    name: "oem_brand",
    nullable: true,
    length: 70,
  })
  oemBrand: string | null;

  @Column("character varying", {
    name: "oem_tagline",
    nullable: true,
    length: 70,
  })
  oemTagline: string | null;

  @Column("character varying", {
    name: "oem_url_logo",
    nullable: true,
    length: 255,
  })
  oemUrlLogo: string | null;

  @Column("character varying", {
    name: "oem_url_tos",
    nullable: true,
    length: 255,
  })
  oemUrlTos: string | null;

  @Column("character varying", {
    name: "oem_url_privacy",
    nullable: true,
    length: 255,
  })
  oemUrlPrivacy: string | null;

  @Column("character varying", {
    name: "oem_url_android",
    nullable: true,
    length: 255,
  })
  oemUrlAndroid: string | null;

  @Column("character varying", {
    name: "oem_url_ios",
    nullable: true,
    length: 255,
  })
  oemUrlIos: string | null;

  @Column("character varying", {
    name: "oem_url_otherapp",
    nullable: true,
    length: 255,
  })
  oemUrlOtherapp: string | null;

  @Column("smallint", { name: "class_id", nullable: true })
  classId: number | null;

  @Column("character varying", {
    name: "pay_channels",
    nullable: true,
    length: 1000,
  })
  payChannels: string | null;

  @Column("smallint", { name: "flag_payment", default: () => "0" })
  flagPayment: number;
}
