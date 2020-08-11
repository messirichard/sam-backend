import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("scenes_admin_id", ["adminId"], {})
@Index("primary13", ["id"], { unique: true })
@Index("title1", ["title"], {})
@Entity("scenes", { schema: "public" })
export class Scenes {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "title", length: 35 })
  title: string;

  @Column("date", { name: "date_start", nullable: true })
  dateStart: string | null;

  @Column("date", { name: "date_end", nullable: true })
  dateEnd: string | null;

  @Column("time without time zone", {
    name: "time_start",
    nullable: true,
    default: () => "'00:00:00'",
  })
  timeStart: string | null;

  @Column("time without time zone", {
    name: "time_end",
    nullable: true,
    default: () => "'23:59:59'",
  })
  timeEnd: string | null;

  @Column("smallint", { name: "days", default: () => "127" })
  days: number;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;

  @Column("bigint", { name: "admin_id" })
  adminId: string;
}
