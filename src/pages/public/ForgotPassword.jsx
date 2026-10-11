import { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Typography,
  Card,
  Result,
  message,
} from 'antd';
import {
  MailOutlined,
  ArrowLeftOutlined,
  LockOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router';
import './styles/Signin.css';

const { Title, Text } = Typography;

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onFinish = async ({ email }) => {
    setLoading(true);

    try {
      // TODO: Call your password-reset API here.
      // await authService.forgotPassword({ email });

      console.log('Password reset requested');

      // Show this only after the API succeeds.
      setSubmitted(true);
    } catch (error) {
      message.error(
        error?.response?.data?.message ||
          'Unable to process your request. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <Card className="signin-card" bordered={false}>
        {!submitted ? (
          <>
            <div className="signin-header">
              <div className="signin-icon">
                <LockOutlined />
              </div>

              <Title level={2}>Forgot password?</Title>

              <Text type="secondary">
                Enter your registered email address and
                we'll send instructions to reset your password.
              </Text>
            </div>

            <Form
              name="forgot-password"
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
              size="large"
              scrollToFirstError
            >
              <Form.Item
                label="Email address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your email!',
                  },
                  {
                    type: 'email',
                    message: 'Please enter a valid email address!',
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Enter your email"
                  autoComplete="email"
                />
              </Form.Item>

              <Form.Item className="signin-submit">
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                >
                  Send Reset Instructions
                </Button>
              </Form.Item>
            </Form>

            <div className="signin-footer">
              <Link to="/sign-in">
                <ArrowLeftOutlined /> Back to Sign In
              </Link>
            </div>
          </>
        ) : (
          <Result
            status="success"
            title="Check your email"
            subTitle="If an account exists for that email address, you will receive instructions to reset your password. Please check your inbox and spam folder."
            extra={[
              <Button
                type="primary"
                key="signin"
                onClick={() => {
                  window.location.assign('/signin');
                }}
              >
                Back to Sign In
              </Button>,
            ]}
          />
        )}
      </Card>
    </div>
  );
};

export default ForgotPassword;