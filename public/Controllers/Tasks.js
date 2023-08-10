const getAllTask = (req, res) => {
  res.send("get all tasks");
};
const createTask = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("updateTask");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask };
