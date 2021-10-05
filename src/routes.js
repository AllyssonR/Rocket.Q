const express = require("express");
const QuestionController = require("./Controllers/QuestionController.js");
const RoomController = require("./Controllers/RoomControllers.js");
const route = express.Router();

route.get("/", (require, response) => {
  response.render("index", { page: "enter-room" });
});
route.get("/create-pass", (require, response) => {
  response.render("index", { page: "create-pass" });
});
route.get("/room/", (require, response) => {
  response.render("room");
});
route.post("/room/:room/:question/:action", QuestionController.index);
route.post("/room/create-room", RoomController.create);

module.exports = route;
