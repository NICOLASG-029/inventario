import mysql from "promise-mysql";
import config from "./../config.js";

let connection;

const getConnection = async () => {
  try {
    if (!connection) {
      connection = await mysql.createConnection({
        host: config.host,
        database: config.database,
        user: config.user,
        password: config.password,
      });
      console.log("🟢 Conexión a la base de datos MySQL establecida.");
    }
    return connection;
  } catch (error) {
    console.error("🔴 Error al conectar a la base de datos:", error.message);
    throw error;
  }
};

export default getConnection;
