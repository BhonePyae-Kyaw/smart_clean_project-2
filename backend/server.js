const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ result: true });
});

const routes = require("./routes/routes");
app.use("/api/", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
