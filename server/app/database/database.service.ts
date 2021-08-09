import { injectable } from "inversify";
import * as pg from "pg";

@injectable()
export class DatabaseService {

    private connectionConfig: pg.ConnectionConfig = {
        user: "postgres",
        database: "carwash",
        password: "admin",
        port: 5432,
        host: "127.0.0.1",
        keepAlive: true
    };

    pool: pg.Pool = new pg.Pool(this.connectionConfig);

    constructor() {
        this.pool.connect();
        console.log("Connected to DB");
    }
}
