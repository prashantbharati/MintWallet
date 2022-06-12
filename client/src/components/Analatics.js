import React from "react";

function Analatics({ transactions }) {
  const totalTransactions = transactions.length;
  const totalIncomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenceTransactions = transactions.filter(
    (transaction) => transaction.type === "expence"
  );

  return <div>Analatics</div>;
}

export default Analatics;
