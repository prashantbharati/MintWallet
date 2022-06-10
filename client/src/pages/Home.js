import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";

import "../resources/transactions.css";
import AddEditTransaction from "../components/AddEditTransaction";
function Home() {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  return (
    <DefaultLayout>
      <div className="filter d-flex justify-content-between align-items-center">
        <div className="d-flex"></div>

        <div className="d-flex">
          <button
            className="primary"
            onClick={() => setShowAddEditTransactionModal(true)}
          >
            ADD NEW
          </button>
        </div>
      </div>

      <div className="table-analtics"></div>

      {showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
        />
      )}
    </DefaultLayout>
  );
}

export default Home;
