import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cron", ["cron"], {})
@Index("fk_scenes_actions_device_id", ["deviceId"], {})
@Index("fk_scenes_actions_event_id", ["eventId"], {})
@Index("primary30", ["id"], { unique: true })
@Index("scenesactions_sceneid", ["sceneId"], {})
@Entity("scenes_actions", { schema: "public" })
export class ScenesActions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "device_id" })
  deviceId: string;

  @Column("character varying", { name: "raw_param", length: 255 })
  rawParam: string;

  @Column("text", { name: "raw_value" })
  rawValue: string;

  @Column("bigint", { name: "delay", default: () => "0" })
  delay: string;

  @Column("character varying", { name: "cron", nullable: true, length: 70 })
  cron: string | null;

  @Column("bigint", { name: "event_id", nullable: true })
  eventId: string | null;

  @Column("bigint", { name: "scene_id" })
  sceneId: string;
}
