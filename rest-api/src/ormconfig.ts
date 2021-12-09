import { ConnectionOptions } from "typeorm";
import config from "./config";

export const createOptions: ConnectionOptions = {
  type: "mysql",
  host: config.mysql.dbHost,
  port: Number(config.mysql.dbPort),
  username: config.mysql.dbUser,
  password: config.mysql.dbPass,
  database: config.mysql.dbName,
  synchronize: true,
  logging: false,
};
