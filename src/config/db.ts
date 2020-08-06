import {createConnection} from "typeorm";

export const connection = createConnection({
         type: "postgres",
         host: "localhost",
         port: 5432,
         username: "postgres",
         password: "123456",
         database: "iot_new",
         synchronize: true,
         logging: false,
       });
