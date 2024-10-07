import { Button, Flex } from 'antd';
import React from 'react';

const DefaultButton = ({
  buttonText,
  height,
  width,
  background,
  borderColor,
}) => (
  <Flex gap='small' wrap>
    <Button
      type='default'
      shape='round'
      size='large'
      style={{
        color: '#000000',
        width: width ? `${width}px` : undefined,
        height: height ? `${height}` : undefined,
        background: background ? `${background}` : undefined,
        borderColor: borderColor ? `${borderColor}` : undefined,
      }}
    >
      {buttonText}
    </Button>
  </Flex>
);
export default DefaultButton;
