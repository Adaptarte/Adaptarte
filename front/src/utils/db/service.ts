import type {
  DatabaseParams,
  SQLiteDatabase
} from "react-native-sqlite-storage";
import { DEBUG, openDatabase } from "react-native-sqlite-storage";

import type { IDatabaseOptions } from "./types";

const dbOptions: IDatabaseOptions = {
  debug: true,
  name: "User"
};

const params: DatabaseParams = {
  createFromLocation: `~${dbOptions.name}.db`,
  location: "default",
  name: `${dbOptions.name}.db`,
  readOnly: false
};

DEBUG(true);

const getDB = (): SQLiteDatabase =>
  openDatabase(
    params,
    () => {
      if (dbOptions.debug) {
        console.info("DB opened");
      }
    },
    (err) => {
      console.error(err.message);
    }
  );

const read = async <T extends object = object>(
  db: SQLiteDatabase,
  sql: string
): Promise<T[]> =>
  new Promise<T[]>((resolve, reject) => {
    db.readTransaction(
      (tx) => {
        tx.executeSql(
          sql,
          [],
          (_, { rows }) => {
            if (dbOptions.debug) {
              console.info(`Selected ${rows.length} items`);
              rows.raw().forEach((row) => {
                console.info(row);
              });
            }
            resolve(rows.raw());
          },
          (_, err) => {
            reject(`Error selecting: ${err.message}`);
          }
        );
      },
      (err) => {
        reject(`Error reading: ${err.message}`);
      },
      undefined
    );
  });

export { dbOptions, getDB, read };
