import { Router } from "express";
const router = Router();
import Task from "../models/Task";
import {
  indexController,
  editGetController,
  editPostController,
  deleteGetController,
  toogleDoneController,
  taskAddController,
} from "../controllers/TaskController";

router.get("/", indexController);
router.post("/tasks/add", taskAddController);
router.get("/edit/:id", editGetController);
router.post("/edit/:id", editPostController);
router.get("/delete/:id", deleteGetController);
router.get("/toogleDone/:id", toogleDoneController);

export default router;
