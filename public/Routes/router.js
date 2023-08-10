const express = require("express");
const {
  getAllTask,
  getTask,
  updateTask,
  deleteTask,
  createTask,
} = require("../Controllers/Tasks");
const router = express.Router();
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
