const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();
app.use(express.json());
const path = require("path");
const cors=require("cors")
// import cors from "cors";
const userRoute = require("./routes/usersRoute");
const transactionsRoute = require("./routes/transactionsRoute");
app.use(cors());
app.use("/api/users/", userRoute);
app.use("/api/transactions/", transactionsRoute);

const port = process.env.PORT || 5000;

// if (process.env.NODE_ENV === "production") {
//   //i.e we r at a live server
//   app.use("/", express.static("client/build")); //after deploying we get a build folder in the client which we make as our entry folder, this line is for  the frontend

//   app.get("*", (req, res) => {
//     //* means for all the requests // this line is for the backend
//     res.sendFile(path.resolve(__dirname, "client/build/index.html"));
//   });
// }

app.get("/", (req, res) => {
  res.send("Hello to mintwallet backend lol");
});

app.listen(port, () => console.log(`Node JS Server started at port ${port}!`));
