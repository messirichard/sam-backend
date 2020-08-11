import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_scenes_events_device_id", ["deviceId"], {})
@Index("primary29", ["id"], { unique: true })
@Index("fk_scenes_events_scene_id", ["sceneId"], {})
@Entity("scenes_events", { schema: "public" })
export class ScenesEvents {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "device_id" })
  deviceId: string;

  @Column("character varying", { name: "raw_param", length: 255 })
  rawParam: string;

  @Column("text", { name: "raw_value" })
  rawValue: string;

  @Column("smallint", { name: "equality", default: () => "0" })
  equality: number;

  @Column("bigint", { name: "scene_id" })
  sceneId: string;
}
