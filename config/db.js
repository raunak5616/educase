import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.MYSQL_PUBLIC_URL || process.env.MYSQL_URL;

export const pool = databaseUrl
  ? mysql.createPool(databaseUrl)
  : mysql.createPool({
      host: process.env.MYSQLHOST,
      port: Number(process.env.MYSQLPORT),
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQL_DATABASE || process.env.MYSQLDATABASE,
    });

