import { Column, Entity, Index } from "typeorm";

@Index("primary10", ["customerId", "deviceId"], { unique: true })
@Index("custdev_deviceid", ["deviceId"], {})
@Entity("customers_devices", { schema: "public" })
export class CustomersDevices {
  @Column("bigint", { primary: true, name: "customer_id" })
  customerId: string;

  @Column("bigint", { primary: true, name: "device_id" })
  deviceId: string;
}
