import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,{
    host: config.host,
    port: 5432,
    dialect: "postgres",
  });
