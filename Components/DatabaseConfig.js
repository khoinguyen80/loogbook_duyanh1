import * as SQLite from "expo-sqlite";
export const Db_conect_SQLLite = {
  Connect_SQLLite: () => SQLite.openDatabase("dbName", 1.0),
};

