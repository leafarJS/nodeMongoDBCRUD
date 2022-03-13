import Task from "../models/Task";

export const indexController = async (req, res) => {
  const task = await Task.find().lean();
  res.render("index", { task });
};

export const taskAddController = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (e) {
    console.log(e.message);
  }
};

export const editGetController = async (req, res) => {
  try {
    console.log(req.params.id);
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (e) {
    console.log(e.message);
  }
};

export const editPostController = async (req, res) => {
  // console.log(req.body);
  // console.log(req.params.id);
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  // res.send("recibido");
  res.redirect("/");
};

export const deleteGetController = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

export const toogleDoneController = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
