import { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Card,
  message,
} from 'antd';
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router';
import './styles/Signin.css';

const { Title, Text } = Typography;

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);

    try {
      // TODO: Call your registration API here.
      // Example:
      // await authService.signup({
      //   name: values.name,
      //   email: values.email,
      //   password: values.password,
      // });

      console.log('Signup values:', {
        name: values.name,
        email: values.email,
      });

      message.success('Form validated successfully.');
      // Navigate after successful API registration:
      // navigate('/signin');
    } catch (error) {
      message.error(
        error?.response?.data?.message ||
          'Unable to create your account. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <Card className="signin-card" variant={false}>
        <div className="signin-header">
          <div className="signin-icon">
            <UserAddOutlined />
          </div>

          <Title level={2}>Create an account</Title>
          <Text type="secondary">
            Get started by creating your account
          </Text>
        </div>

        <Form
          form={form}
          name="signup"
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          size="large"
          scrollToFirstError
        >
          <Form.Item
            label="Full name"
            name="name"
            rules={[
              { required: true, message: 'Please enter your full name!' },
              {
                whitespace: true,
                message: 'Name cannot be empty!',
              },
              {
                max: 100,
                message: 'Name cannot exceed 100 characters!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter your full name"
              autoComplete="name"
              maxLength={100}
            />
          </Form.Item>

          <Form.Item
            label="Email address"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
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

          <Form.Item
            label="Password"
            name="password"
            extra="Use at least 8 characters, including uppercase, lowercase, a number, and a special character."
            rules={[
              { required: true, message: 'Please enter a password!' },
              {
                min: 8,
                message: 'Password must contain at least 8 characters!',
              },
              {
                max: 128,
                message: 'Password cannot exceed 128 characters!',
              },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])\S+$/,
                message:
                  'Include uppercase, lowercase, a number, and a special character.',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Create a password"
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item
            label="Confirm password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error('Passwords do not match!')
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm your password"
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item
            name="terms"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error('Please accept the terms to continue.')
                      ),
              },
            ]}
          >
            <Checkbox>
              I agree to the <Link to="/terms">Terms of Service</Link>
              {' '}and <Link to="/privacy">Privacy Policy</Link>
            </Checkbox>
          </Form.Item>

          <Form.Item className="signin-submit">
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
            >
              Create Account
            </Button>
          </Form.Item>

          <div className="signin-footer">
            <Text type="secondary">
              Already have an account?
            </Text>{' '}
            <Link to="/sign-in">Sign in</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;