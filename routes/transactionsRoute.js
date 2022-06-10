const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();
const moment = require("moment");
const { response } = require("express");
router.post("/add-transaction", async function (req, res) {
  try {
    console.log(req.body);
    const newtransaction = new Transaction(req.body);
    await newtransaction.save();
    res.send("Transaction Added Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/get-all-transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    response.send(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
