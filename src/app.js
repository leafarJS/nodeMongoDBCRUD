import express from "express";
import indexRoutes from "./routes/indexRoutes";
import { engine } from "express-handlebars";
import path from "path";
import morgan from "morgan";
//settings
const app = express();
//
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    layoutDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");
//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
//routes
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname, "public")));

export default app;
