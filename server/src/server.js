const app = require("./app.js");

const connect = require("./configs/db");

app.listen(8080, async function () {
  await connect();
  console.log("Listening on port 8080 -> http://localhost:8080");
});
