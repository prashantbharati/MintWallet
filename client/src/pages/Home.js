import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import "../resources/transactions.css";
import AddEditTransaction from "../components/AddEditTransaction";
import { message, Table } from "antd";
import Spinner from "../components/Spinner";
function Home() {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [transactionsData, setTransactionsData] = useState([]);
  const getTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("bharati-user"));

      setLoading(true);
      const response = await axios.post(
        "/api/transactions/get-all-transactions",
        { userid: user._id }
      );
      console.log(response.data);
      setTransactionsData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      // render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
  ];

  return (
    <DefaultLayout>
      {loading && <Spinner />}
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

      <div className="table-analtics">
        <div className="table">
          <Table columns={columns} dataSource={transactionsData} />
        </div>
      </div>

      {showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
          getTransactions={getTransactions}
        />
      )}
    </DefaultLayout>
  );
}

export default Home;
