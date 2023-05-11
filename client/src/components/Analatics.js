import { Progress } from "antd";
import React from "react";
import "../resources/analatics.css";
function Analatics({ transactions }) {
  //total transactions length
  const totalTransactions = transactions.length;

  //total income transactions seperated
  const totalIncomeTransactions = transactions.filter(
    (transaction) => transaction.type === "Income"
  );

  //total expense transactions seperated
  const totalExpenceTransactions = transactions.filter(
    (transaction) => transaction.type === "Expence"
  );

  //total income transactions percentage seperated
  const totalIncomeTransactionsPercentage =
    (totalIncomeTransactions.length / totalTransactions) * 100;

  //total expense transactions percentage seperated
  const totalExpenceTransactionsPercentage =
    (totalExpenceTransactions.length / totalTransactions) * 100;

  // total turnover calculated

  // accumulator function, sum=prevsum+currsum

  const totalTurnover = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  // total income turnover calculated
  const totalIncomeTurnover = transactions
    .filter((transaction) => transaction.type === "Income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  // total expense turnover calculated
  const totalExpenceTurnover = transactions
    .filter((transaction) => transaction.type === "Expence")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  console.log(totalExpenceTurnover);

  // total income turnover percentage calculated
  const totalIncomeTurnoverPercentage =
    (totalIncomeTurnover / totalTurnover) * 100;

  // total expense turnover percentage calculated
  const totalExpenceTurnoverPercentage =
    (totalExpenceTurnover / totalTurnover) * 100;

  const categories = [
    "Salary",
    "Entertainment",
    "Freelance",
    "Food",
    "Travel",
    "Investment",
    "Education",
    "Medical",
    "Tax",
  ];

  return (
    <div className="analytics">
      <div className="row">
        <div className="col-md-4 mt-3">
          <div className="transactions-count">
            <h4>Total Transactions : {totalTransactions}</h4>
            <hr />
            <h5>Income : {totalIncomeTransactions.length}</h5>
            <h5>Expence : {totalExpenceTransactions.length}</h5>

            <div className="progress-bars">
              <Progress
                style={{ margin: " 0 25px" }}
                strokeColor="#5DD64F"
                type="circle"
                percent={totalIncomeTransactionsPercentage.toFixed(0)}
              />
              <Progress
                strokeColor="#E5572F"
                type="circle"
                percent={totalExpenceTransactionsPercentage.toFixed(0)}
              />
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-3">
          <div className="transactions-count">
            <h4>Total Turnover : {totalTurnover}</h4>
            <hr />
            <h5>Income : {totalIncomeTurnover}</h5>
            <h5>Expence : {totalExpenceTurnover}</h5>

            <div className="progress-bars">
              <Progress
                style={{ margin: " 0 25px" }}
                strokeColor="#5DD64F"
                type="circle"
                percent={totalIncomeTurnoverPercentage.toFixed(0)}
              />
              <Progress
                strokeColor="#E5572F"
                type="circle"
                percent={totalExpenceTurnoverPercentage.toFixed(0)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <div className="category-analysis">
            <h4>Income - Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter((t) => t.type === "Income" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && (
                  <div className="category-card">
                    <h5>{category}</h5>
                    <Progress
                      strokeColor="#0B5AD9"
                      percent={((amount / totalIncomeTurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>

        <div className="col-md-6">
          <div className="category-analysis">
            <h4>Expence - Category Wise</h4>
            {categories.map((category) => {
              const amount = transactions
                .filter((t) => t.type === "Expence" && t.category === category)
                .reduce((acc, t) => acc + t.amount, 0);
              return (
                amount > 0 && (
                  <div className="category-card">
                    <h5>{category}</h5>
                    <Progress
                      strokeColor="#0B5AD9"
                      percent={((amount / totalExpenceTurnover) * 100).toFixed(
                        0
                      )}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analatics;
