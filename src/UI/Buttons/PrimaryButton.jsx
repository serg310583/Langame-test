import { Button, Flex } from 'antd';
import React from 'react';

const PrimaryButton = ({
  buttonText,
  iconAfterText,
  htmlType,
  width,
  height,
}) => (
  <Flex gap='small' wrap>
    <Button
      htmlType={htmlType ? htmlType : null}
      type='primary'
      iconPosition='end'
      shape='round'
      size='large'
      icon={<IconComponent icon={iconAfterText} />}
      style={{
        width: width ? `${width}` : undefined,
        height: height ? `${height}` : undefined,
        background: '#DC0000',
        borderColor: '#DC0000',
      }}
    >
      {buttonText}
    </Button>
  </Flex>
);

const IconComponent = ({ icon }) => {
  if (!icon) return null;
  return <img alt='icon' src={icon} style={{ marginRight: '5px' }} />;
};
export default PrimaryButton;
