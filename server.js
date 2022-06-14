const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const app = express();
app.use(express.json());
const path = require("path");
const userRoute = require("./routes/usersRoute");
const transactionsRoute = require("./routes/transactionsRoute");
app.use("/api/users/", userRoute);
app.use("/api/transactions/", transactionsRoute);
app.get("/", (req, res) => res.send("Hello world"));

// Setting up the database with the help of Mongoose and env variables

if (process.env.NODE_ENV === "production") {
  // Frontend
  app.use("/", express.static("client/build"));

  // Backend
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port:${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
