import { connect } from "mongoose";
import { MONGODB_URI } from "../config";
require("colors");

(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("DB Connected to: ", db.connection.name);
  } catch (e) {
    console.log(`Error: ${e.message}`.red);
  }
})();
