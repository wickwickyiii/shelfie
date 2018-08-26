require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cont = require("./controller");
const port = 3001;
const app = express();

app.use(json());
massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log("ERROR", err));

app.get("/api/inventory", cont.get);
app.post("/api/inventory", cont.post);
app.delete("/api/inventory/:id", cont.delete);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
