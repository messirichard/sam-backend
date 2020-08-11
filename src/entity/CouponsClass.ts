import { Column, Entity, Index } from "typeorm";

@Index("primary6", ["classId", "couponId"], { unique: true })
@Index("fk_class_id", ["classId"], {})
@Entity("coupons_class", { schema: "public" })
export class CouponsClass {
  @Column("bigint", { primary: true, name: "coupon_id" })
  couponId: string;

  @Column("smallint", { primary: true, name: "class_id" })
  classId: number;
}
