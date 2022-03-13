import app from "./app.js";
import "./database/dataBase.js";

require("colors");

//listen
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;
app.listen(port, hostname, () => {
  console.log(
    `El servidor se está ejecutando en http://${hostname}:${port}/`.magenta
  );
});
