import React from "react";
import { Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

import "../resources/default-layout.css";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("bharati-user"));
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          label: (
            <li
              onClick={() => {
                localStorage.removeItem("bharati-user");
                navigate("/login");
              }}
            >
              Logout
            </li>
          ),
        },
      ]}
    />
  );

  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">MintWallet</h1>
        </div>

        <div>
          <Dropdown overlay={menu} placement="bottomLeft">
            <button className="primary">{user.name}</button>
          </Dropdown>
        </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
