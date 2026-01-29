import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const ButtonWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${(props) => props.color};
  height: 45px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
`;

const Button = ({ children, color = '#2a86ff' }) => {
  return (
    <ButtonWrapper color={color} activeOpacity={0.7}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
