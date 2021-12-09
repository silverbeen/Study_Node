import { createConnection, getConnectionOptions } from "typeorm";

export const createTypeormConn = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return await createConnection({ ...connectionOptions, name: "default" });
};

// createConnection : db와 연결해주는 람수
// 연결할 때 default 이름을 가진 옵션이 없으면 에러
