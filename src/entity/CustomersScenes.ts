import { Column, Entity, Index } from "typeorm";

@Index("custscenes_index", ["customerId", "sceneId"], { unique: true })
@Index("customersscenes_scene_id", ["sceneId"], {})
@Entity("customers_scenes", { schema: "public" })
export class CustomersScenes {
  @Column("bigint", { name: "customer_id" })
  customerId: string;

  @Column("bigint", { name: "scene_id" })
  sceneId: string;
}
