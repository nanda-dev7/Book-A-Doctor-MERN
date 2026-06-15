import {
  Form,
  Input,
  Button,
  Card,
  message,
} from "antd";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import api from "../../services/api";
import { loginSuccess } from "../../redux/features/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      const { data } = await api.post(
        "/auth/login",
        values
      );

      if (data.success) {
        dispatch(
          loginSuccess({
            user: data.user,
            token: data.token,
          })
        );

        message.success(data.message);

        navigate("/");
      }
    } catch (error) {
      message.error(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <div className="auth-title">
          Book A Doctor
        </div>

        <div className="auth-subtitle">
          Welcome Back
        </div>

        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Enter Email",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Enter Password",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            className="auth-btn"
          >
            Login
          </Button>

          <div className="auth-footer">
            New User?{" "}
            <Link to="/register">
              Register Here
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;