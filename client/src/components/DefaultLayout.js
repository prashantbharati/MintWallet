import React from "react";

function DefaultLayout(props) {
  return (
    <div className="layout">
      <div className="header ">
        <div>
          <h1 className="logo">MintWallet</h1>
        </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
