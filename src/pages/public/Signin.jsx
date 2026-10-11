import { Button, Checkbox, Form, Input, Typography, Card } from 'antd';
import {
  MailOutlined,
  LockOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import './styles/Signin.css';
import { useNavigate } from 'react-router';

const { Title, Text, Link } = Typography;

const Signin = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    navigate("/home");
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="signin-container">
      <Card className="signin-card" bordered={false}>
        <div className="signin-header">
          <div className="signin-icon">
            <LoginOutlined />
          </div>

          <Title level={2}>Welcome back!</Title>
          <Text type="secondary">
            Sign in to continue to your account
          </Text>
        </div>

        <Form
          name="signin"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          requiredMark={false}
          size="large"
        >
          <Form.Item
            label="Email address"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Enter your email"
              autoComplete="email"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please enter your password!' },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </Form.Item>

          <div className="signin-options">
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link href="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <Form.Item className="signin-submit">
            <Button
              type="primary"
              htmlType="submit"
              block
            >
              Sign In
            </Button>
          </Form.Item>

          <div className="signin-footer">
            <Text type="secondary">
              Don't have an account?
            </Text>{' '}
            <Link href="/sign-up">Sign up</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Signin;