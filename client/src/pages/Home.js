import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Form, Input, message, Modal, Select } from "antd";
import "../resources/transactions.css";

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

      <Modal
        title="Add Transaction"
        visible={showAddEditTransactionModal}
        onCancel={() => setShowAddEditTransactionModal(false)}
        footer={false}
      >
        <Form layout="vertical" className="transaction-form">
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>

          <Form.Item label="Type" name="type">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expence">Expence</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Category" name="category">
            <Select>
              {" "}
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="freelance">Freelance</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="entertainment">Entertainment</Select.Option>
              <Select.Option value="investment">Investment</Select.Option>
              <Select.Option value="travel">Travel</Select.Option>
              <Select.Option value="education">Education</Select.Option>
              <Select.Option value="medical">Medical</Select.Option>
              <Select.Option value="tax">Tax</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>

          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>

          <div className="d-flex justify-content-end">
            <button className="primary" type="submit">
              SAVE
            </button>
          </div>
        </Form>
      </Modal>
    </DefaultLayout>
  );
}

export default Home;
