import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("developers_logs_developer_id", ["developerId"], {})
@Index("primary14", ["id"], { unique: true })
@Entity("developers_logs", { schema: "public" })
export class DevelopersLogs {
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

  @Column("bigint", { name: "developer_id" })
  developerId: string;
}
