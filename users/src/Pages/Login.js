import React from "react";
import { Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../Styles/Login.css";

export default function Login() {

    const navigate = useNavigate();
    const onfinishhadler = (values) => {

        if (values.name === "foo" && values.password === "bar") {
            localStorage.setItem("token", "success");
            message.success("Login successfully");
            navigate("/");
        } else {
            message.error("wrong credentials")
        }

    };
    return (
        <>
            <div className="form-container">
                <Form
                    layout="vertical"
                    onFinish={onfinishhadler}
                    className="register-form"
                >
                    <h3 className="text-center">Login Form</h3>

                    <Form.Item label="Username" name="name">
                        <Input type="text" required></Input>
                    </Form.Item>

                    <Form.Item label="Password" name="password">
                        <Input type="password" required></Input>
                    </Form.Item>

                    <button className="btn btn-primary" type="submit">
                        Login
                    </button>
                </Form>
            </div>
        </>
    );
}
