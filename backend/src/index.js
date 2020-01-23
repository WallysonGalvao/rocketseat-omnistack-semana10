const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-r9moy.mongodb.net/devradar?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3333;
app.listen(port, () => console.info(`Server listening on ${port}`));
