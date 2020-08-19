import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("api_key_index", ["apiKey"], { unique: true })
@Index("idx_ft_nameapi", ["apiKey", "name"], {})
@Index("dev_token_developers", ["developerId"], {})
@Index("primary16", ["id"], { unique: true })
@Entity("developers_tokens", { schema: "public" })
export class DevelopersTokens {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", {
    name: "name",
    length: 35,
    default: () => "'My API'",
  })
  name: string;

  @Column("character varying", { name: "api_key", length: 32 })
  apiKey: string;

  @Column("character varying", { name: "api_token", length: 128 })
  apiToken: string;

  @Column("smallint", { name: "state", default: () => "1" })
  state: number;

  @Column("bigint", { name: "developer_id" })
  developerId: string;
}
