const express = require("express");
const next = require("next");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const dir = path.join(__dirname, "../frontend");
const app = next({ dev, dir });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    // Image static folder
    server.use(cors());
    server.use(express.static(path.join(__dirname, "public")));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
