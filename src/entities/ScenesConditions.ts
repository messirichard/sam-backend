import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_scenes_conditions_device_id", ["deviceId"], {})
@Index("fk_scenes_conditions_event_id", ["eventId"], {})
@Index("primary31", ["id"], { unique: true })
@Entity("scenes_conditions", { schema: "public" })
export class ScenesConditions {
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

  @Column("bigint", { name: "event_id" })
  eventId: string;
}
