import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import "../resources/transactions.css";

function Home() {
  return (
    <DefaultLayout>
      <div className="filter d-flex justify-content-between align-items-center">
        <div className="d-flex"></div>

        <div className="d-flex">
          <button className="primary">ADD NEW</button>
        </div>
      </div>

      <div className="table-analtics"></div>
    </DefaultLayout>
  );
}

export default Home;
