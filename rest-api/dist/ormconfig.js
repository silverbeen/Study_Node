"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOptions = void 0;
const config_1 = require("./config");
exports.createOptions = {
    type: "mysql",
    host: config_1.default.mysql.dbHost,
    port: Number(config_1.default.mysql.dbPort),
    username: config_1.default.mysql.dbUser,
    password: config_1.default.mysql.dbPass,
    database: config_1.default.mysql.dbName,
    synchronize: true,
    logging: false,
};
//# sourceMappingURL=ormconfig.js.map