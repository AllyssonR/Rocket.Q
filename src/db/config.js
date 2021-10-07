const { Database } = require("sqlite3");
const { open } = require("sqlite");

module.exports = () =>
  open({
    filename: "./src/db/database/rocketq.sqlite",
    driver: Database(),
  });
