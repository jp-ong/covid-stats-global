const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());

const db = process.env.MONGO_URI;
mongoose.connect(
  db,
  { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("MongoDB Connected...")
);

app.use("/api/stats", require("./routes/api/stats"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server on port ${port}...`));
