import React from 'react';
import styled from 'styled-components/native';

// Use parentheses () and an object {} instead of backticks ``
const ButtonWrapper = styled.TouchableOpacity((props) => ({
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 30, // Pure number, no quotes, no px
  backgroundColor: props.color || '#2a86ff',
  height: 45,
  marginTop: 20,
}));

const ButtonText = styled.Text({
  color: '#fff',
  fontWeight: '600',
  fontSize: 16, // Pure number
});

const Button = ({ children, color = '#2a86ff' }) => {
  return (
    <ButtonWrapper color={color} activeOpacity={0.7}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;