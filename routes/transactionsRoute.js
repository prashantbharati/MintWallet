const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();
const moment = require("moment");
router.post("/add-transaction", async function (req, res) {
  try {
    const newtransaction = new Transaction(req.body);
    await newtransaction.save();
    res.send("Transaction Added Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});
