import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fk_models_elements_element_id", ["elementId"], {})
@Index("primary26", ["id"], { unique: true })
@Index("fk_models_elements_model_id", ["modelId"], {})
@Entity("models_elements", { schema: "public" })
export class ModelsElements {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "element_id" })
  elementId: string;

  @Column("character varying", { name: "param", length: 2000 })
  param: string;

  @Column("bigint", { name: "model_id" })
  modelId: string;
}
