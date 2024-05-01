import { JSONFileSync, LowSync } from "lowdb";
import { DBSchema } from "~/types/model.type";

import data from './data.json';

const convertedData: DBSchema = data.map(task => ({
  id: task["ID"],
  contractNumber: task["Contract Number"],
  name: task["Name"].replace(/\u00A0/g, " "),
  status: task["Status"],
  phone: task["Phone"],
  sex: task["Sex"],
  address: task["Address"],
  ocrBirthdate: task["OCR birthdate"],
  birthdate: task["Birthdate"],
  dateInserted: task["Date inserted "],
  dateUpdated: task["Date updated"],
}))

let db: LowSync<DBSchema>;

declare global {
  var __db__: LowSync<DBSchema>;
}

if (!global.__db__) {
  const adapter = new JSONFileSync<DBSchema>('db.json');
  global.__db__ = new LowSync(adapter);
}

db = global.__db__;
db.read();

if (!db.data) {
  db.data = convertedData;
  db.write();
}

export { db };
