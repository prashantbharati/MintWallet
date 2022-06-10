const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());

const userRoute = require("./routes/usersRoute");
const transactionsRoute = require("./routes/transactionsRoute");
app.use("/api/users/", userRoute);
app.use("/api/transactions/", transactionsRoute);
app.get("/", (req, res) => res.send("Hello world"));
dotenv.config();

// Setting up the database with the help of Mongoose and env variables
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
