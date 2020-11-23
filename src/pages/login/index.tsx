import React from 'react';
import { message } from 'antd';
import ProForm, {
  ProFormText,
  ProFormCaptcha,
  ProFormProps,
} from '@ant-design/pro-form';
import { MobileTwoTone, MailTwoTone } from '@ant-design/icons';

const waitTime = (time: number = 100) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  const ProFormProps: ProFormProps = {
    // onFinish: async () => {
    //     // await waitTime(2000);
    //     message.success('提交成功！');
    //   }}
    onFinish: async () => {
      return message.success('登录成功');
    },
    submitter: {
      searchConfig: {
        submitText: '登录',
      },
      render: (_, dom) => dom.pop(),
    },
  };
  return (
    <div
      style={{
        width: 330,
        margin: '100px auto',
      }}
    >
      <ProForm {...ProFormProps}>
        <h1
          style={{
            textAlign: 'center',
            padding: '50px',
          }}
        >
          <img
            style={{
              height: '44px',
              marginRight: 16,
            }}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
          Ant Design
        </h1>

        <ProFormText
          fieldProps={{
            size: 'large',
            prefix: <MobileTwoTone />,
          }}
          name="id"
          placeholder="请输入手机号"
          rules={[
            {
              required: true,
              message: '请输入手机号!',
            },
            {
              pattern: /^1\d{10}$/,
              message: '不合法的手机号格式!',
            },
          ]}
        />

        <ProFormCaptcha
          fieldProps={{
            size: 'large',
            prefix: <MailTwoTone />,
          }}
          captchaProps={{
            size: 'large',
          }}
          name="captcha"
          rules={[
            {
              required: true,
              message: '请输入验证码！',
            },
          ]}
          placeholder="请输入验证码"
          onGetCaptcha={async () => {
            await waitTime(1000);
            message.success('验证码发送成功!');
          }}
        />
      </ProForm>
    </div>
  );
};
