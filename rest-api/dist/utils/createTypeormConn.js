"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypeormConn = void 0;
const typeorm_1 = require("typeorm");
const createTypeormConn = async () => {
    const connectionOptions = await (0, typeorm_1.getConnectionOptions)(process.env.NODE_ENV);
    return await (0, typeorm_1.createConnection)(Object.assign(Object.assign({}, connectionOptions), { name: "defult" }));
};
exports.createTypeormConn = createTypeormConn;
//# sourceMappingURL=createTypeormConn.js.map