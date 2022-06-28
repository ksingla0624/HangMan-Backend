const express = require("express");
const game = require("./routes");
const app = express();
const { sequelize, Word } = require("./models/index");

async function intialize() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.set("Access-Control-Allow-Headers", "content-type");
    next();
  });
  app.use("/api", game);

  await sequelize.sync();
  await Word.bulkCreate([
    {
      title: "scaler",
    },
    {
      title: "helloworld",
    },
    {
      title: "buzzinga",
    },
    {
      title: "house",
    },
    {
      title: "hacker",
    },
    {
      title: "programmer",
    },
  ]);
  app.listen(8000, () => {
    console.log("Server Running");
  });
}

intialize();
