import { Form } from "antd";
import Input from "antd/lib/input/Input";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  return (
    <div className="register">
      <div className="row">
        <div className="col-md-5"></div>

        <div className="col-md-5">
          <Form layout="vertical">
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered , Click Here To Login</Link>
              <button className="secondary" type="submit">
                REGISTER
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
