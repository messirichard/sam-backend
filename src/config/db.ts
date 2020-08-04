import {createConnection} from "typeorm";

export const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port:  54320,
    username: "root",
    password: "123456",
    database: "iot",
    synchronize: true,
    logging: false
});
