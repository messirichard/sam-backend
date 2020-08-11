import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("custreport_index", ["customerId", "reportId"], { unique: true })
@Index("customersreports_reportid", ["reportId"], {})
@Entity("customers_reports", { schema: "public" })
export class CustomersReports {
  @PrimaryGeneratedColumn({type: "bigint", name: "customer_id" })
  customerId: string;

  @Column("bigint", { name: "report_id" })
  reportId: string;
}
