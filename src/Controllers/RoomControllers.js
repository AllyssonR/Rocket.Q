const Database = require("../db/config");
module.exports = {
  async create(require, response) {
    const db = await Database();
    let roomId;

    for (var i = 0; i < 6; i++) {
      i == 0
        ? (roomId = Math.floor(Math.random() * 10).toString())
        : (roomId += Math.floor(Math.random() * 10).toString());
    }
    response.redirect(`/room/${roomId}`);
  },
};
