import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";

export const dbConnection = async () => {
  const connectOptions = await getConnectionOptions(process.env.NODE_ENV);
  return createConnection({ ...connectOptions, name: "default" });
};
