import {
  BookOutlined,
  CalendarOutlined,
  CheckOutlined,
  CloseOutlined,
  FileOutlined,
  LockOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './FormRegistration.css';

import {
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Select,
  Switch,
  Tooltip,
} from 'antd';
import React from 'react';
import PrimaryButton from '../../UI/Buttons/PrimaryButton';

const documents = [
  {
    value: 'Паспорт РФ',
    label: <span className='documentText'>Паспорт РФ</span>,
  },
  {
    value: 'Другой документ',
    label: <span className='documentText'>Другой документ</span>,
  },
];
const labelRender = (props) => {
  const { label, value } = props;
  if (label) {
    return value;
  }
  return <span className='textDoc'>Документ</span>;
};

const colorMap = {
  success: '#2ecc71',
  error: '#ff4136',
};

const dateFormat = 'DD/MM/YYYY';
const FormRegistration = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <ConfigProvider>
      <Form
        form={form}
        name='register'
        onFinish={onFinish}
        // initialValues={{
        //   document: ['Паспорт РФ'],
        // }}
        style={{
          maxWidth: 638,
        }}
        scrollToFirstError
      >
        <div className='gridRegistration'>
          <div className='rowName'>
            <Form.Item
              name='nickname'
              hasFeedback='true'
              rules={[
                {
                  required: true,
                  message: 'Введите ФИО!',
                  whitespace: true,
                },
              ]}
            >
              <Input
                suffix={
                  <Tooltip title='Что вы хотите, чтобы другие называли вас?' />
                }
                prefix={<UserOutlined style={{ marginRight: 15 }} />}
                placeholder='ФИО'
              />
            </Form.Item>
          </div>
          <div className='rowOne'>
            <div className='Phone'>
              <Form.Item
                name='phone'
                hasFeedback='true'
                rules={[
                  {
                    required: true,
                    message: 'Поле должно содержать 11 цифр',
                  },
                ]}
              >
                <Input
                  maxLength={11}
                  prefix={<PhoneOutlined style={{ marginRight: 15 }} />}
                  placeholder='Номер телефона'
                />
              </Form.Item>
            </div>
            <div className='birth'>
              <Form.Item
                name='birthdate'
                hasFeedback='true'
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, укажите дату рождения!',
                  },
                ]}
              >
                {' '}
                <DatePicker
                  style={{
                    height: 70,
                    width: 300,
                  }}
                  prefix={<CalendarOutlined style={{ marginRight: 15 }} />}
                  placeholder='Дата рождения'
                  format={dateFormat}
                  allowClear={false}
                  getPopupContainer={(triggerNode) => triggerNode.parentNode}
                  showToday={false}
                  showTime={false}
                  onChange={(date, dateString) => {
                    form.setFieldsValue({ birthdate: dateString });
                  }}
                />
              </Form.Item>
            </div>
          </div>
          <div className='rowTwo'>
            <div className='document'>
              <Form.Item
                name='document'
                hasFeedback='true'
                rules={[
                  {
                    // type: 'array',
                    required: true,
                  },
                ]}
              >
                <Select
                  style={{
                    height: 70,
                    width: 300,
                  }}
                  options={documents}
                  labelRender={labelRender}
                  defaultValue='1'
                  suffixIcon={<BookOutlined />}
                  placeholder='Документ'
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name='passportNumber'
                hasFeedback='true'
                rules={[
                  {
                    required: true,
                    message: 'Поле должно содержать 10  Символов',
                  },
                ]}
              >
                <Input
                  styles={{ fontSize: 55 }}
                  placeholder='Укажите 10 цифр серия и номер'
                  maxLength={10}
                  prefix={<FileOutlined style={{ marginRight: 15 }} />}
                />
              </Form.Item>
            </div>
          </div>
          <div className='rowThree'>
            <div className='password'>
              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Пароль должен быть не менее 6 символов',
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  prefix={<LockOutlined style={{ marginRight: 15 }} />}
                  placeholder='Укажите пароль'
                />
              </Form.Item>
            </div>
            <div className='confirmPassword'>
              <Form.Item
                name='confirm'
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Пароль должен быть не менее 6 символов',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'The new password that you entered do not match!'
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ marginRight: 15 }} />}
                  placeholder='Повторите пароль'
                />
              </Form.Item>
            </div>
          </div>
          <div className='rowForth'>
            <Form.Item>
              <div>
                <Switch
                  checkedChildren={<CheckOutlined style={{ height: 33 }} />}
                  unCheckedChildren={<CloseOutlined style={{ height: 33 }} />}
                />
                <span className='subscribeText'>
                  Я даю свое право на информационную рассылку
                </span>
              </div>
            </Form.Item>
            <Form.Item>
              <PrimaryButton
                type='primary'
                htmlType='submit'
                width='638px'
                height='46px'
                buttonText='ЗАРЕГИСТРИРОВАТЬСЯ'
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </ConfigProvider>
  );
};
export default FormRegistration;
